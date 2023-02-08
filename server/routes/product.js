const express = require('express')
const { requireSignin } = require('../controller/admin/auth')
const router = express.Router()
const Product = require('../models/product')
// const { addCategory, getCategories } = require('../controller/category')
const { adminMiddleware } = require('../middleware')
router.post('/product/create',requireSignin,adminMiddleware,(req,res)=>{

res.status(200).json({message:'hello'})
})
// router.get('/category/getcategory',getCategories)


module.exports = router