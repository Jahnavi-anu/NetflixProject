const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:"1d"});
}

router.post("/signup", async(req,res)=>{
    console.log("Signup called with body:",req.body);
    try{
        const {name,email,password} = req.body;

        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({message:"User already exists"});
        }
        // const hash = await bcrypt.hash(password, 10);
        const newUser = new User({name,email,password});
        await newUser.save();
        

        // const  = await User.create({name, email, password});
        const token = createToken(newUser._id);

        res.cookie("jwt",token,{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*1000,
        });

        res.status(201).json({message:"Signup successful", newUser});

    }catch(error){
        console.log(error);
        res.status(400).json({message:"Signup failed", error:error.message})
    }
});

router.post("/login",async(req,res)=>{
    try{
        const {email , password} = req.body;
        const newUser = await User.findOne({email});
        if(!newUser) return res.status(404).json({message:"user not found"});
        const isMatch = await bcrypt.compare(password,newUser.password);
        if(!isMatch)
            return res.status(401).json({message:"Incorrect password"});

        const token = createToken(newUser._id);
        res.cookie("jwt",token,{
            httpOnly:true,
            secure:false,
            maxAge:24*60*60*100,
        });

        res.status(200).json({message:"Login successful",newUser});
    }catch(error){
        res.status(400).json({message:"Login failed",error:error.message})
    }
})
router.post("/logout",(req,res)=>{
    res.clearCookie("jwt",{
        httpOnly:true,
        secure:false,
    });
    res.status(200).json({message:"Logout successful"});
})

module.exports = router;