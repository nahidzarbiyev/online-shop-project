const Product = require("../models/product");
const shortid = require("shortid");
// const product = require("../models/product");
exports.createProduct = (req, res) => {
  const slugify = require("slugify");
  // res.status(200).json({file:req.files, body:req.body})
  let { name, price, description, category, createdBy,quantity, size, color } =
    req.body;

  let productPictures = []
    if (req.files.length>0) {
        productPictures=  req.files.map((file)=>{
            return{img: file.filename}
        })
    }
  
    let product = new Product({
    name: name,
    slug: slugify(name),
    price,
     description,
    category,
   productPictures,
    createdBy: req.user._id,
    quantity,
    size,
    color
  });

  product.save(((error, product) => {
    if (error) return res.status(400).json({ message: error });
    if (product) {
      res.status(200).json({ product });
    }
  }));
};
