const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth-controller')



router.route('/getSongs').get(authController.getSongs);


module.exports = router