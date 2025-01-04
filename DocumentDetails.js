import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { getDocumentById, updateDocument, deleteDocument } from '../services/documentServices';

const DocumentDetails = () => {
    const socket = useMemo(() => io('http://localhost:5000'), []);
    const { id } = useParams();
    const navigate = useNavigate();
    const [document, setDocument] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [successMessage] = useState("");
    const location = useLocation();
    const message = location.state?.message;

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const doc = await getDocumentById(id);
                setDocument(doc);
                setTitle(doc.title);
                setContent(doc.content);
            } catch (error) {
                setError('Failed to fetch document');
            }
        };
        fetchDocuments();
    }, [id]);

    useEffect(() => {
        socket.emit('joinDocument', id);
        socket.on('receiveUpdate', (updateData) => {
            if (updateData.content) {
                setContent(updateData.content);
            }
        });
        socket.on('receiveUpdateTitle', (updateData) => {
            if (updateData.title) {
                setTitle(updateData.title);
            }
        });
        return () => {
            socket.off('receiveUpdate');
            socket.off('receiveUpdateTitle');
            socket.disconnect();
        };
    }, [id, socket]);

    const handleUpdate = async () => {
        try {
            await updateDocument(id, { title, content });
            socket.emit('documentUpdate', { documentId: id, title, content });
            successMessage('Document updated successfully!'); // Utilized here
        } catch (error) {
            setError('Failed to update document');
        }
    };
    
    

    const handleDelete = async () => {
        try {
            await deleteDocument(id);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to delete document');
        }
    };

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!document) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            {message && <div className="alert alert-info">{message}</div>}
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            <h2 className="mb-4">Document Details</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        socket.emit('documentUpdate', { documentId: id, title: e.target.value, content });
                    }}
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    className="form-control"
                    rows="5"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                        socket.emit('documentUpdate', { documentId: id, title, content: e.target.value });
                    }}
                />
            </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={handleUpdate}>Update Document</button>
                <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete Document</button>
            </div>
        </div>
    );
    };

export default DocumentDetails;
