// model/followModel.js
const Follow = require('./schema/follow');

module.exports = {
    addFollow: async function (followerId, followingId, callback) {
        try {
            const newFollow = new Follow({
                followerId: followerId,
                followingId: followingId
            });

            newFollow.save((err, follow) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, follow);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    deleteUnfollow: async function (followerId, followingId, callback) {
        try {
            Follow.findOneAndDelete({ followerId: followerId, followingId: followingId }, (err, follow) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, follow);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    getFollowers: async function (userId, callback) {
        try {
            Follow.find({ followingId: userId }, (err, followers) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, followers);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    },

    getFollowing: async function (userId, callback) {
        try {
            Follow.find({ followerId: userId }, (err, following) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, following);
                }
            });
        } catch (err) {
            console.log(err);
            callback(err, null);
        }
    }
};
