const profileModel = require('../model/profileModel');

module.exports = {
    updateDetails: async function (req, res) {
        try {
            const { userId, updatedDetails } = req.body;
            const user = await profileModel.updateUserDetails(userId, updatedDetails);
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).send('Error updating user details.');
        }
    },

    getDetails: async function (req, res) {
        try {
            const { userId } = req.params;
            const user = await profileModel.getUserDetailsById(userId);
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching user details.');
        }
    },

    changePassword: async function (req, res) {
        try {
            const { userId, newPassword } = req.body;
            await profileModel.changePassword(userId, newPassword);
            res.status(200).send('Password changed successfully.');
        } catch (err) {
            console.log(err);
            res.status(500).send('Error changing password.');
        }
    }
};
