const express = require('express');
const verifyToken = require('../middleware/auth');
const Document = require('../modules/Document');

const router = express.Router();

// GET All Documents

router.post('/', authenticateToken, async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    try {
        const document = new Document({ title, content, owner: req.user.id });
        await document.save();
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ message: 'Server error while creating document' });
    }
});

router.get('/', verifyToken, async (req, res) => {
    try {
        const document = await Document.find({});
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET Document by ID
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST Create a New Document
router.post('/', verifyToken, async (req, res) => {
    const { title, content } = req.body;

    try {
        const newDocument = new Document({
            title,
            content,
            createdBy: req.user.id // Assuming you store the user ID in the token middleware
        });

        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument);
    } catch (error) {
        console.error('Error creating document:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// UPDATE Document
router.put('/:id', verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        res.json(updatedDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE Document
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: 'Document deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;




















/*
const express = require('express');
const verifyToken = require('../middleware/auth');
const Document = require('../modules/Document');

const router = express.Router();

// GET All Documents
router.get('/', verifyToken, async (req, res) => {
    try {
        const documents = await Document.find({});
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET Document by ID
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// UPDATE Document
router.put('/:id', verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        res.json(updatedDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE Document
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: 'Document deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

*/
















/*



const express=require('express');
const Document=require('../modules/Document');
const {verifyToken} =require('../middleware/auth');
const router=express.Router();
router.get('/',verifyToken,async(req,res)=>
{
    try{
        const documents=await Document.find({});
        res.json(documents);
    }
    catch(error)
    {
        res.status(500).json({message:'Server error'});
    }
}
);
router.get('/:id',verifyToken,async(req,res)=>
    {
        try{
            const documents=await Document.findById(req.params.id);
            if(!document)
            {
                return res.status(404).json({message:'Document not found'});
            }
            res.json(documents);
        }
        catch(error)
        {
            console.error('Error fetching document:',error);
            res.status(500).json({message:'Server error'});
        }
    }
    );
router.put('/:id',verifyToken, async (req,res)=>
{
    const {title,content}=req.body;
    try{
        const updatedocument=await Document.findByIdAndUpdate(req.params.id,{title,content},{new:true});
           res.json(updateDocument);
        }
        catch(error)
        {
            res.status(500).json({message:'Server Error'})
        }
});
router.delete('/:id',verifyToken, async (req,res)=>
    {
       
        try{
            await Document.findByIdAndUpdate(reg.params.id);
        res.json({message:'Document delete'});       
        }
            catch(error)
            {
                res.status(500).json({message:'Server Error'})
            }
    });
    module.exports=router;

    */