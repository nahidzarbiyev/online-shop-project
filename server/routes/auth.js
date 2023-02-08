const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const {validateSignupRequest, isRequestValidated} = require('../validators/auth')
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSignupRequest, isRequestValidated,signin);


// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;