const express = require('express')
const Lecture = require('../model/lecture.model')
const router = express.Router()
const authenticate = require("../middleware/authenticate")

router.post("/lecture",authenticate, async (req,res)=>{
    const lecture = await Lecture.create(req.body)

    return res.status(201).send({lecture})
})

module.exports = router