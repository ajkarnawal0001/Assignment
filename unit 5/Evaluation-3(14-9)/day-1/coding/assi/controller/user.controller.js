const express = require('express')
const User = require('../models/user.model')
const router = express.Router()
router.post("",async(req,res)=>{
    const user = await User.create(req.body);
    return res.status(201).json({user})
})


// all user
router.get("",async(req,res)=>{
    const user = await User.find().lean().exec()

    return res.status(200).json({user})
})

// all user
router.get("/:id",async(req,res)=>{
    const user = await User.findById(req.params.id).lean().exec()

    return res.status(200).json({user})
})

// update a single user
router.patch("/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {new:true})

    return res.status(200).json({user})
})

router.delete("/:id",async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({user})
})

module.exports = router
