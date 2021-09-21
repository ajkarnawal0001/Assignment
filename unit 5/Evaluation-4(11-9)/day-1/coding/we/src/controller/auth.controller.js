const jwt = require("jsonwebtoken")

const User = require("../model/user.model")

const newToken = (user) =>{
    return jwt.sign({user:user}, process.env.JWT_SECRET_KEY)
}
const register = async (req,res)=>{
    let user;
    try {
        // check if the email is provided already 
        user = await User.findOne({email:req.body.email}).lean().exec()
        
        // if yes then throw am exception with status code 400
        if(User) return res.status(400).send({status:"failed",mesage:"please try with a different email and password"})
        // if no then create a user with the information provided in the request body
        // hash the password and save the user
        user = await User.create(req,body);
        if(!user) return res.status(500).send({status:"faiiled",message: "please try again later"})
        //create token for that user 
        const token = newToken(user)
        // we will return the response with user and token
        res.status(201).json({token:token})

    } catch (err) {
        return res.status(500).send({status:"failed",message:"please try again later 2"})        
    }


}
const login = async (req,res) =>{
    try{

        // if user with the email exists
        let user = await User.findOne({email:req.body.email}).exec()
        
        if(!user) 
        return res.status(401).json({
            status:"failed",
            mesage:"please try with a different email and password"})
        // if not then throw an error of status code 400
    }catch(err){
    return res 
    .status(500)
    .json({status:"failed", message:"something went wrong"})
    }
    const match =await user.checkPassword(req.body.password);

        if(!match) return res.status(401).json({
            status:"failed",
            mesage:"password is not match"
        })
        // if yes then we need to check the password
        const token = newToken(user)
        return res.status(201).json({data : {token}})
    
} 
module.exports = {register,login}