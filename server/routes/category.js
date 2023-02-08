const express = require('express')
const router = express.Router()
const { addCategory, getCategories } = require('../controller/category')
const { adminMiddleware,requireSignin } = require('../middleware')
const shortid = require('shortid')
const path = require("path");
const multer = require('multer')


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });

  const upload = multer({storage})



router.post('/category/create',requireSignin,adminMiddleware, upload.single('categoryImage'),addCategory)
router.get('/category/getcategory',getCategories)


module.exports = router