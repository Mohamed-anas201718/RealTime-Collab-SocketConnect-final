import axios from 'axios';

// Fetch all documents
export const getDocuments = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        const { data } = await axios.get('http://localhost:5000/api/document', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        console.error('Failed to fetch documents:', error);
        throw error;
    }
};

// Fetch document by ID
export const getDocumentById = async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        const { data } = await axios.get(`http://localhost:5000/api/document/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        console.error('Failed to fetch document:', error);
        throw error;
    }
};

// Update a document
export const updateDocument = async (id, updatedFields) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        const { data } = await axios.put(`http://localhost:5000/api/document/${id}`, updatedFields, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        console.error('Failed to update document:', error);
        throw error;
    }
};

// Delete a document
export const deleteDocument = async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        await axios.delete(`http://localhost:5000/api/document/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Failed to delete document:', error);
        throw error;
    }
};




































/*
import axios from 'axios';

// Fetch all documents
export const getDocuments = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/documents');
        return response.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

// Fetch a single document by ID
export const getDocumentById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/documents/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching document:', error);
        throw error;
    }
};

// Update a document
export const updateDocument = async (id, updateData) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/documents/${id}`, updateData);
        return response.data;
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

// Delete a document
export const deleteDocument = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/documents/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};

*/











/*
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/document'; // Fix API_URL inconsistency
const user = JSON.parse(localStorage.getItem('user'));
const token = user ? user.token : null;

const getAuthConfig = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user ? user.token : null;

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const getDocuments = async () => {
    const config = getAuthConfig();
    const { data } = await axios.get(API_URL, config);
    return data;
};

// Apply the same for other service functions

export const getDocumentById = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`, config);
    return data;
};

export const updateDocument = async (id, documentData) => {
    const { data } = await axios.put(`${API_URL}/${id}`, documentData, config);
    return data;
};

export const deleteDocument = async (id) => {
    const { data } = await axios.delete(`${API_URL}/${id}`, config);
    return data;
};
*/



























/*
import axios from 'axios';

const API_URI='http://localhost:5000/api/documents';
const user=JSON.parse(localStorage.getItem('user'));

const token=user ? user.token:null;
export const getDocuments = async () => {
    const { data } =await axios.get(API_URI,{
        headers:
        {
            Authorization: `Bearer ${token}`,
        },
    
    });
    return data;
};

export const getDocumentById = async (id) =>
{
    const {data} =await axios.get(`${API_URL}/${id}`,{
        headers:
        {
          Authorization: `Bearer ${token}`,  
        },
    });
    return data;
};

export const updateDocument = async (id,documentData) => {
    const {data} = await axios.put(`${API_URL}/${id}`,documentData,{
        headers: 
        {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export const deleteDocument = async (id) => {
    const {data} = await axios.put(`${API_URL}/${id}`,documentData,{
        headers: 
        {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

*/