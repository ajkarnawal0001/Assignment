const express = require('express')
const Post = require('../models/post.model')
const Comment = require("../models/comment.model")
const router = express.Router()

router.post("",async(req,res)=>{
    const post = await Post.create(req.body)

    return res.status(201).json({post})
})

//  get all Posts

router.get("",async(req,res)=>{
    const post = await Post.find({is_deleted:false}).populate("user_id").populate("tag_ids").lean().exec();
    return res.status(200).json({post})
})

router.get("/:id", async(req,res)=>{
    const post = await Post.find(req.params.id).populate("user_id").populate("tag_ids").lean().exec();

    return res.status(200).json({post})
})

router.patch("/:id", async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    return res.status(200).json({post})
})
router.delete("/:id", async (req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.id,{is_deleted:true})
    return res.status(200).json({post})

})

module.exports = router