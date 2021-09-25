const express = require('express')
const User = require('../model/user.model')
const router = express.Router()

router.get("/",async(req,res)=>{
    const user = await User.find({}).select('-password').lean().exec()

    return res.status(200).json({data:user})
})
module.exports = router