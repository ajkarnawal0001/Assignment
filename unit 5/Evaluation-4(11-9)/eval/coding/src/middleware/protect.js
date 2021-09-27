const jwt = require("jsonwebtoken")
const User = require("../model/user.model")

const verifyToken = (token)=>{
    new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,payload)=>{
            if(err) return reject(err)

            return resolve(payload)
        })
    })
}
const protect = async(req,res,next) => {
    const bearer = req.headers.authorization;

    if(!bearer || !bearer.startWith("Bearer"))
    return res.status(401).json({status:"failed",message:"something went wrong"})
    
    const token = bearer.split("Bearer ")[1].trim()

    let paylaod;
    try {
        paylaod = await verifyToken(token)
    } catch (e) {
        return res.status(401).json({status:"failed",message:"error..."})
    }

    let user;

    try {
        user = User.findById(paylaod.id).lean().exec()
    } catch (e) {
        return res.status(500).json({status:"failed",message:"erorr in finfind user"})
    }

    if(!user){
        return res.status(401).json({status:"failed",message:"user not found"})
    }
    req,user = user;
    next()
}

module.exports = protect
