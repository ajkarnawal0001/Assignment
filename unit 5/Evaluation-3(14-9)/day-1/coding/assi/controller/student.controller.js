const express = require('express')
const Student = require('../models/student.module')
const router = express.Router()

router.post("",async(req,res)=>{
    const student = await Student.create(req.body)

    return res.status(201).json({student})
})

//  get all Students

router.get("",async(req,res)=>{
    const student = await Student.find({is_deleted:false}).populate("user_id").populate("eval_ids").lean().exec();
    return res.status(200).json({student})
})

router.get("/:id", async(req,res)=>{
    const student = await Student.find(req.params.id).populate("user_id").populate("eval_ids").lean().exec();

    return res.status(200).json({student})
})

router.patch("/:id", async (req,res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    return res.status(200).json({student})
})
router.delete("/:id", async (req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id)
    return res.status(200).json({student})

})

module.exports = router