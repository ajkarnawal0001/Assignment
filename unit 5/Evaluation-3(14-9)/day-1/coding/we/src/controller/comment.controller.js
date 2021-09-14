const express = require('express')
const Comment = require("../models/comment.model")
const router = express.Router()

router.post("",async(req,res)=>{
    const comment = await Comment.create(req.body)

    return res.status(201).json({comment})
})

//  get all Posts

router.get("",async(req,res)=>{
    const comment = await Comment.find({is_deleted:false}).populate("post_id").lean().exec();
    return res.status(200).json({comment})
})

router.get("/:id", async(req,res)=>{
    const comment = await Comment.find(req.params.id).populate("post_id").lean().exec();

    return res.status(200).json({comment})
})

router.patch("/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    return res.status(200).json({comment})
})
router.delete("/:id", async (req,res)=>{
    const comment = await Comment.findByIdAndDelete(req.params.id)
    return res.status(200).json({comment})

})

module.exports = router