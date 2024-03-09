// controller/authController.js
const authModel = require('../model/authModel');

module.exports = {
    register: async function (req, res) {
        try {
            // const username = req.body.username;
            // const email = req.body.email;
            // const password = req.body.password;

            // await authModel.register(username, email, password);
            let params = req.body;
            const min = 100000;
            const max = 999999;
            params.userId = Math.floor(Math.random() * (max - min + 1)) + min;
            params.createdBy = params.userId;
            const result = await authModel.register(params);
            if (result.status) {
                res.status(200).send({ status: result.status, message: 'User registered successfully.', data: result.data });
            } else {
                res.status(500).send({ status: result.status, message: 'User registered Unsuccessfully.', data: {} });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    },

    login: async function (req, res) {
        try {
            // const email = req.body.email;
            // const password = req.body.password;

            // const user = await authModel.login(email, password);
            let params = req.body;
            const result = await authModel.login(params);
            if (result.status) {
                res.status(200).send({ status: result.status, message: 'User logged in successfully.', data: result.data });
            } else {
                res.status(404).send({ status: result.status, message: 'User logged in unsuccessfully.', data: {} });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    },

    forgotPassword: async function (req, res) {
        try {
            const email = req.body.email;

            const resetToken = await authModel.forgotPassword(email);
            if (!resetToken) {
                res.status(404).send('User not found.');
            } else {
                res.status(200).send('Reset token generated successfully.');
            }
        } catch (err) {
            console.log(err);
            res.status(500).send('Error generating reset token.');
        }
    }
};
