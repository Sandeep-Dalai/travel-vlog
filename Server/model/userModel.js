// model/usermodel.js
const User = require('./schema/user');

module.exports = {
    addUser: async function (userData) {
        try {
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        } catch (err) {
            throw err;
        }
    },

    updateUserDetails: async function (userId, updatedDetails) {
        try {
            const user = await User.findByIdAndUpdate(userId, updatedDetails, { new: true });
            return user;
        } catch (err) {
            throw err;
        }
    },

    getAllUserDetails: async function () {
        try {
            const users = await User.find({});
            return users;
        } catch (err) {
            throw err;
        }
    }
};
