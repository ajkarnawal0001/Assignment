const express = require('express')
const User = require('../model/user.model')

const router = express.Router()
const protect = require('../middleware/protect')

router.get("/",protect, async (req,res)=>{
    const users = await User.find({}).lean().exec()

    return res.status(200).json({data:users})
})

module.exports = router