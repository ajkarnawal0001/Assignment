const express = require('express')
const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/masai",{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

const StudentSchema = new mongoose.Schema({
    first_name: {type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    studying:{type:Boolean,required:true},
})

const Students = mongoose.model("students",StudentSchema)

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    student_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"students",
    required:true
    },
    tag_ids:[
    {
        type:mongoose.Schema.Types.ObjectId,
        res:"tag",
        required:false    
    }
    ]

},{
versionKey:false,
timestamps:true
})

const Post = mongoose.model("post",postSchema)

// Tag 
const tagSchema = new mongoose.Schema({
    name:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
const Tag = mongoose.model("post",postSchema)
const app = express()
app.use(express.json())

app.post("students",async(req,res)=>{
    const student = await Students.create(req.body);
    return res.status(201).json({student})
})

app.get("/students",async (req,res)=>{
    const student = await Students.find().lean().exec()
    // console.log({student})
    return res.status(200).json({student})
})
app.get("/students/18",async (req,res)=>{
    let x = 18
    const student = await Students.find().where('age').gt(x)
    return res.status(200).json({student})
})

app.get("/students/gender/male",async (req,res)=>{
    let x = "Male"
    const student = await Students.find().where('gender').gt(x)
    return res.status(200).json({student})
})
app.get("/students/gender/female",async (req,res)=>{
    let x = "Female"
    const student = await Students.find().where('gender').gt(x)
    return res.status(200).json({student})
})

app.listen(8000, async function(){
    await connect()
    console.log("running")
})