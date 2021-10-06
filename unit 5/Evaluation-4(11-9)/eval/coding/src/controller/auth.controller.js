const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../model/user.model')
const newToken = (user) =>{
    return jwt.sign({user: user},process.env.JWT_SECRET_KEY)
}

const signup = async (req,res) =>{
    let user;
    try {
        user = await User.findOne({email:req.body.email}).lean().exec()
        if(user) return res.status(400).json({status:"failed", message:"something went wrong"})
        
        user = await User.create(req.body)
        if(!user) return res.status(500).json({status:"failed", message:"something went wrong"})
        
        const token = newToken(user)
        return res.status(201).json({token:token})
    } catch (e) {
        return res.status(500).json({status:"failed", message:"something went wrong"})
    }
}

const signin = async (req,res) =>{
    let user;
    try {
        user = await User.findOne({email:req.body.email}).exec()
        
        if(!user) return res.status(401).json({status:"failed",message:"you can not loggin"})
    } catch (e) {
        return res.status(500).json({status:"failed",message:"something went wron"})
    }

    try {
        const match = await user.checkPassword(req.body.password)
        if(!match) return res.status(401).json({
            status:"failed",
            message:"your email or password is incorrect"
        })
    } catch (error) {
    return res.status(500).json({status:"failed",message:"something went wrong"})
        
    }
    const token = newToken(user)
    return res.status(201).json({data: {token}})
}

module.exports = {
    signin,
    signup
}