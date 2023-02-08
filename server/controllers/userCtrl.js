
const Users = require('../models/userModel')
const userCtrl = {
register:  async (req,res)=>{
   try {
    // const {name, email, password} = req.body

    const user = await Users.findOne({email:req.body.email})

    if (user) {
        return res.status(400).json({msg:"this email already exist"})
    }if (password.length< 6 ) {
        return res.status(400).json({msg:"Password is at least 6 character long"})
    }

   } catch (error) {
    return res.status(500).json({msg:error.message})
   }
}
}

module.exports = userCtrl