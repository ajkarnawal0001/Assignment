const express = require('express')
const Tag = require('../models/evaluation.module')
const router = express.Router()

router.post("",async(req,res)=>{
    const tag = await Tag.create(req.body)

    return res.status(201).json({tag})
})

//  get all tags

router.get("",async(req,res)=>{
    const tags = await Tag.find().lean().exec();
    return res.status(200).json({tag})
})

router.get("/:id", async(req,res)=>{
    const tag = await Tag.find(req.params.id).lean().exec()

    return res.status(200).json({tag})
})

router.patch("/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    return res.status(200).json({tag})
})
router.delete("/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndDelete(req.params.id)
    return res.status(200).json({tag})

})

module.exports = router