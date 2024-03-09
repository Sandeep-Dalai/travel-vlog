// controller/commentsController.js

const Comment = require('../model/commentsModel');

module.exports = {
    addComment: async function (req, res) {
        try {
            const { postId, text, userId } = req.body;

            const newComment = new Comment({
                postId: postId,
                text: text,
                userId: userId
            });

            newComment.save((err, comment) => {
                if (err) {
                    res.status(500).send('Error adding comment.');
                } else {
                    res.status(200).send('Comment added successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error adding comment.');
        }
    },

    getComments: async function (req, res) {
        try {
            Comment.find({}, (err, comments) => {
                if (err) {
                    res.status(500).send('Error fetching comments.');
                } else {
                    res.status(200).json(comments);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching comments.');
        }
    }
};
