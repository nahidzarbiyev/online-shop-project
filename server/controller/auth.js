const User = require("../models/user");


exports.signup = (req,res)=>{
    User.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) return res.status(404).json({ msg: "User already exist" });
    
        const { firstName, lastName, email, password } = req.body;
        const _user = new User({
          firstName,
          lastName,
          email,
          password,
          username: Math.random().toString(),
        });
    
        _user.save((error, data) => {
          if (error) {
            return res.status(400).json({ message: "somthing went wrong" });
          }
          if (data) {
            res.status(201).json({
              message: "User Created succesfully"
            });
          }
        });
      });
}