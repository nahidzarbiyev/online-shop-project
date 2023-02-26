const express = require('express');
const { requireSignin, userMiddleware } = require('../middleware/index');
const { addAddress, getAddress } = require('../controller/adress');
const router = express.Router();


router.post('/user/address/create', requireSignin, userMiddleware, addAddress);
router.post('/user/getaddress', requireSignin, userMiddleware, getAddress);

module.exports = router;