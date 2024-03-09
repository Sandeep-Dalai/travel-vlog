// controller/likeController.js
const Like = require('../model/likeModel');

module.exports = {
    addLike: async function (req, res) {
        try {
            const { userId, postId } = req.body;

            const newLike = new Like({
                userId: userId,
                postId: postId
            });

            newLike.save((err, like) => {
                if (err) {
                    res.status(500).send('Error adding like.');
                } else {
                    res.status(200).send('Like added successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error adding like.');
        }
    },

    deleteLike: async function (req, res) {
        try {
            const { userId, postId } = req.body;

            Like.findOneAndDelete({ userId: userId, postId: postId }, (err, like) => {
                if (err) {
                    res.status(500).send('Error deleting like.');
                } else {
                    res.status(200).send('Like deleted successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error deleting like.');
        }
    },

    getLikes: async function (req, res) {
        try {
            const { postId } = req.params;

            Like.find({ postId: postId }, (err, likes) => {
                if (err) {
                    res.status(500).send('Error fetching likes.');
                } else {
                    res.status(200).json(likes);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching likes.');
        }
    }
};
