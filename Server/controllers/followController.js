// controller/followController.js
const Follow = require('../model/followModel');

module.exports = {
    addFollow: async function (req, res) {
        try {
            const { followerId, followingId } = req.body;

            const newFollow = new Follow({
                followerId: followerId,
                followingId: followingId
            });

            newFollow.save((err, follow) => {
                if (err) {
                    res.status(500).send('Error adding follow.');
                } else {
                    res.status(200).send('Follow added successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error adding follow.');
        }
    },

    deleteUnfollow: async function (req, res) {
        try {
            const { followerId, followingId } = req.body;

            Follow.findOneAndDelete({ followerId: followerId, followingId: followingId }, (err, follow) => {
                if (err) {
                    res.status(500).send('Error deleting follow.');
                } else {
                    res.status(200).send('Unfollowed successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error deleting follow.');
        }
    },

    getFollowers: async function (req, res) {
        try {
            const { userId } = req.params;

            Follow.find({ followingId: userId }, (err, followers) => {
                if (err) {
                    res.status(500).send('Error fetching followers.');
                } else {
                    res.status(200).json(followers);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching followers.');
        }
    },

    getFollowing: async function (req, res) {
        try {
            const { userId } = req.params;

            Follow.find({ followerId: userId }, (err, following) => {
                if (err) {
                    res.status(500).send('Error fetching following.');
                } else {
                    res.status(200).json(following);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching following.');
        }
    }
};
