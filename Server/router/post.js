// router/post.js
const router = require("express").Router();
const authController = require('../controllers/authController');
const profileController = require('../controllers/profileController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
//router.post('/updateProfile', profileController.updateProfileDetails);

module.exports = router;
