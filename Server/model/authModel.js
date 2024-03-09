// model/authModel.js
const User = require('./schema/user');

module.exports = {
    register: async function (params) {
        try {
            const newUser = new User({
                user_id: params.userId,
                user_name: params.username,
                email: params.email,
                password: params.password,
                created_by: params.createdBy,
                created_at: new Date()
            });
            // const newUser = new User({
            //     username: username,
            //     email: email,
            //     password: password
            // });
            const result = await newUser.save();
            if (result) {
                return { status: true, data: result };
            } else {
                return { status: false };
            }
        } catch (err) {
            console.log(err);
            return { status: false };
        }
    },

    login: async function (params) {
        try {
            // const user = await User.findOne({ email: email, password: password });
            const result = await User.findOne({ 
                email: params.email, 
                password: params.password 
            });
            if (result) {
                return { status: true, data: result };
            } else {
                return { status: false };
            }
        } catch (err) {
            console.log(err);
            return { status: false };
        }
    },

    forgotPassword: async function (email) {
        try {
            const resetToken = "dummy_reset_token";
            return resetToken;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};