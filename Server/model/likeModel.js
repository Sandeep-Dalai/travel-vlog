// model/likeModel.js
const Like = require('./schema/like');

module.exports = {
    addLike: async function (userId, postId, callback) {
        try {
            const newLike = new Like({
                userId: userId,
                postId: postId
            });

            newLike.save((err, like) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, like);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    deleteLike: async function (userId, postId, callback) {
        try {
            Like.findOneAndDelete({ userId: userId, postId: postId }, (err, like) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, like);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    getLikesForPost: async function (postId, callback) {
        try {
            Like.find({ postId: postId }, (err, likes) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, likes);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    }
};
