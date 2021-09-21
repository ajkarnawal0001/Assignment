const express = require('express')
const User = require('../models/user.model')

const router = express.Router()

router.post('/',async (res,req)=>{
    const user = await User.create()
    res.send("hello")
})

module.exports = router