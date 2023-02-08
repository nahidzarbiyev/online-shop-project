const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json(error);
    if (cart) {



        const product = req.body.cardItems.product


        const item = cart.cardItems.find(q=>q.product==product)

        if (item) {
            
      Cart.findOneAndUpdate(
        { "user": req.user._id, "cardItems.product":product },
        {
          $set: {
            cardItems: {...req.body.cardItems,
            quantity: item.quantity + req.body.cardItems.quantity
        },
          },
        }
      )
      .exec((error,_cart)=>{
        if (error) return res.status(400).json({error})
        if (_cart) {
            return res.status(201).json({cart:_cart})
        }
      })
        }
        else{

            Cart.findOneAndUpdate(
                { user: req.user._id },
                {
                  "$push": {
                    "cardItems": req.body.cardItems,
                  },
                }
              )
              .exec((error,_cart)=>{
                if (error) return res.status(400).json({error})
                if (_cart) {
                    return res.status(201).json({cart:_cart})
                }
              })
        }






      // res.status(200).json({message:cart})
    } else {
      const cart = new Cart({
        user: req.user._id,
        cardItems: [req.body.cardItems],
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};
