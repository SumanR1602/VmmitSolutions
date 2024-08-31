const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Comment = require('../models/Comment');

// Route to fetch all comments
router.get('/fetchallcomments', async (req, res) => {
    try {
        const allcomments = await Comment.find({});
        res.json(allcomments);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error occurred");
    }
});

// Route to delete a comment by ID
router.delete('/delcomment/:id', async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).send("Not Found");
        }

        comment = await Comment.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Comment has been deleted", comment: comment });
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error occurred");
    }
});

// Route to add a new comment
router.post('/addcomment', [
    body('name').isLength({ min: 3 }).withMessage('Enter a valid name'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('website').optional().isURL().withMessage('Enter a valid website URL'),
    body('comment').notEmpty().withMessage('Enter a comment'),
    body('check').notEmpty().withMessage('Enter a check value')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, website, comment, check } = req.body;
        const newcomment = new Comment({
            name,
            email,
            website,
            comment,
            check
        });

        const savedcomment = await newcomment.save();
        // console.log("Saved comment:", savedcomment);
        res.status(200).json({success: true,message: 'Comment has been added',savedcomment
        });
    } catch (error) {
        // console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
