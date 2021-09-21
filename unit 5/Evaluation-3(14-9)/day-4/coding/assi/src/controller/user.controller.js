const express = require('express')

const User = require("../model/user.model")

const upload = require("../middleware/file-upload")

const router = express.Router()

router.post("/single", upload.single("profileImage"), function  (req,res){
    const user = await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        profile_pic:req.file.path
    })
    return res.send("single")
})

router.post("/multiple",function  (req,res){
    return res.send("multiple")
})

module.exports = router