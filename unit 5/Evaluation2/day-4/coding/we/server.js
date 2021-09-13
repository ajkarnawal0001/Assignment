


const { application } = require('express')
const express = require('express')

const mongoose = require('mongoose')

const connect = () =>  {
    return mongoose.connect("/test")
}

const userSchema = new mongoose.Schema({
    first_name = {type:String,}
})

const User = mongoose.model("user",userSchema)


const app = express()
app.use(express.json())
// const postSchema

// CRUD for user

app.post("/users",async(req,res)=>{
    const user = await User.create(req.body);
    return res.status(201).json({user})
})


// all user
app.get("/users",async(req,res)=>{
    const user = await User.find().lean().exec()

    return res.status(200).json({user})
})

// all user
app.get("/users/:id",async(req,res)=>{
    const user = await User.findById(req.params.id).lean().exec()

    return res.status(200).json({user})
})

// update a single user
app.patch("/users/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {new:true})

    return res.status(200).json({user})
})

// Crud for tag

app.post("/tags",async(req,res)=>{
    const tag = await Tag.create(req.body)

    return res.status(201).json({tag})
})

//  get all tags

app.get("/tags",async(res,res)=>{
    const tags = await Tag.find().lean().exec();
    return res.status(200).json({tag})
})

app.get("/tags/:id", async(req,res)=>{
    const tag = await Tag.find(req.params.id).lean().exec()

    return res.status(200).json({tag})
})

app.patch("/tags/:id", async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate
})