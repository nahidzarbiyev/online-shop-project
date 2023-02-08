const express = require('express')
const router = express.Router()
const {addItemToCart } = require('../controller/cart')
const { userMiddleware,requireSignin } = require('../middleware')
router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart)


module.exports = router