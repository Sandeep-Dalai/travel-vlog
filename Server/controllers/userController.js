// controller/userController.js
const userModel = require('../model/userModel');

module.exports = {
    addUser: async function (req, res) {
        try {
            const { username, email, password } = req.body;
            const newUser = await userModel.addUser({ username, email, password });
            res.status(200).send('User added successfully.');
        } catch (err) {
            console.log(err);
            res.status(500).send('Error adding user.');
        }
    },

    updateUserDetails: async function (req, res) {
        try {
            const { userId, updatedDetails } = req.body;
            const user = await userModel.updateUserDetails(userId, updatedDetails);
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).send('Error updating user details.');
        }
    },

    getAllUserDetails: async function (req, res) {
        try {
            const users = await userModel.getAllUserDetails();
            res.status(200).json(users);
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching user details.');
        }
    }
};
