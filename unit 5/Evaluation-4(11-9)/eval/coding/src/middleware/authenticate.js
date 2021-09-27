const authenticate = function(req,res,next){

    token = req?.header?.authorization;

    if(!bearer || !bearer.startWith("Bearer"))
    return res.status(401).json({status:"failed",message:"something went wrong"})
    
    const token = bearer.split("Bearer ")[1].trim()

    next()
}

module.exports = authenticate