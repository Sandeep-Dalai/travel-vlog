// controller/getCaptcha.js
const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateCaptcha = async function (req, res) {
    try {
        let captcha = '';
        for (let i = 0; i < 4; i++) {
            captcha += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
        }

        res.status(200).json({ captcha: captcha });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error generating captcha.');
    }
}

module.exports = {
    generateCaptcha
};
