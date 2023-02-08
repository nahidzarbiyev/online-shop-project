const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const router = express.Router();
const {validateSignupRequest, isRequestValidated} = require('../../validators/auth')


router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignupRequest, isRequestValidated, signin);


module.exports = router;