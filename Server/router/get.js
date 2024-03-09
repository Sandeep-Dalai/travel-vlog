// router/get.js
const router = require("express").Router();
const getCaptcha = require('../controllers/getCaptcha');

router.post('/getCaptcha', getCaptcha.generateCaptcha);

module.exports = router;