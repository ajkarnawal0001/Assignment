const express = require('express')
const Lecture = require('../model/lecture.model')
const protect = require("../middleware/protect")
const authorise = require("../middleware/authrization")
const router = express.Router()

router.post("",protect,authorise(["admin","instructor"]) ,async (req,res)=>{
    const {user} = req.user;

    const lecture = await Lecture.create({
        role:req.body.role,
    instructor:req.body.instructor,
    name:req.body.name,
    creater:user._id
    })

    return res.status(201).send({lecture})
})

module.exports = router