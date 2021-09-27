const signup = async (req,res) =>{
    return res.status(201).json({data:token})
}

const signin = async (req,res) =>{
    return res.send("User")
}

module.exports = {
    signin,
    signup
}