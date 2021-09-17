const express = require("express")

const User = require("../models/user.model")
// const Transpoter = require("../config/mail")

const router = express.Router()

router.get("",async (req,res)=>{
    const page = +req.query.page || 1
    const size = +req.query.size || 10

    const offset = (page-1)*10
    const users = await User.find()
    .skip(offset)
    .limit(size)
    .lean()
    .exec()
    
    const totalDocument = await User.find().totalDocument()

    const totalPages = Math.ceil(totalDocument/size)


    return res.status(200).json({users})

})

module.exports =router