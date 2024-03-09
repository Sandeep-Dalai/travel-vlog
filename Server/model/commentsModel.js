// model/commentsModel.js
const Comment = require('./schema/comment');

module.exports = {
    addComment: async function (postId, text, userId, callback) {
        try {
            const newComment = new Comment({
                postId: postId,
                text: text,
                userId: userId
            });

            newComment.save((err, comment) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, comment);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    getComments: async function (callback) {
        try {
            Comment.find({}, (err, comments) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, comments);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    }
};
