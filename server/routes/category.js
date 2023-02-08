const express = require('express')
const { requireSignin } = require('../controller/admin/auth')
const router = express.Router()
const { addCategory, getCategories } = require('../controller/category')
const { adminMiddleware } = require('../middleware')
router.post('/category/create',requireSignin,adminMiddleware,addCategory)
router.get('/category/getcategory',getCategories)


module.exports = router