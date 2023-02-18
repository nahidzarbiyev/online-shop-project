const Product = require("../models/product");
const shortid = require("shortid");
const Category = require("../models/category");
exports.createProduct = (req, res) => {
  const slugify = require("slugify");
  // res.status(200).json({file:req.files, body:req.body})
  let { name, price, description, category, createdBy, quantity, size, color } =
    req.body;

  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
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
    color,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ message: error });
    if (product) {
      res.status(200).json({ product });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id")
    .exec((err, category) => {
      if (err) {
        return res.status(400).json({ err });
      }
      if (category) {
        Product.find({ category: category._id }).exec((err, products) => {
          if (err) {
            return res.status(400).json({ err });
          }

          if (products.length > 0) {
            res.status(200).json({
              products,
              productsPrice: {
                under3h: products.filter((product) => product.price <= 300),
                under4h: products.filter(
                  (product) => product.price > 300 && product.price <= 400
                ),
                under5h: products.filter(
                  (product) => product.price > 400 && product.price <= 500
                ),
                under8h: products.filter(
                  (product) => product.price > 500 && product.price <= 800
                ),
                under1k: products.filter(
                  (product) => product.price > 800 && product.price <= 1000
                ),
                under15h: products.filter(
                  (product) => product.price > 1000 && product.price <= 1500
                ),
                under2k: products.filter(
                  (product) => product.price > 1500 && product.price <= 2000
                ),
                under25h: products.filter(
                  (product) => product.price > 2000 && product.price <= 2500
                ),
                under3k: products.filter(
                  (product) => product.price > 2500 && product.price <= 3000
                ),
              },
            });
          }
        });
      }
    });
};
