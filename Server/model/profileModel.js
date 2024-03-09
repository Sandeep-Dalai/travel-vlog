const User = require('./schema/user');

module.exports = {
    zz: async function (userId, updatedDetails) {
        try {
            const user = await User.findByIdAndUpdate(userId, updatedDetails, { new: true });
            return user;
        } catch (err) {
            throw err;
        }
    },

    getUserDetailsById: async function (userId) {
        try {
            const user = await User.findById(userId);
            return user;
        } catch (err) {
            throw err;
        }
    },

    changePassword: async function (userId, newPassword) {
        try {
            const user = await User.findById(userId);
            user.password = newPassword;
            await user.save();
        } catch (err) {
            throw err;
        }
    }
};
