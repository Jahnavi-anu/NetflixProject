const jwt = require("jsonwebtoken");
const User = require("../models/user");


const checkUser = async (req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token) return res.json({status:false});

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if(!user) return res.json({status:false});
        res.json({status:true, user:user.email});
        next();
    }catch(err){
        res.json({status:false});
    }
};

module.exports ={checkUser};