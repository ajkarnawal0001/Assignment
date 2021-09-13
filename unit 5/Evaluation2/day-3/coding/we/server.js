const express = require('express')

const mongoose = require('mongoose')

const app = express();
app.use(express.json())

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/ninjas",{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}


//first step is create schema

const userSchema = new mongoose.Schema({
    first_name:{type:String,require:true},
    last_name:{type:String,require:true},
    gender:{type:String,require:false,default:"Male"},
    email:{type:String,require:true},
    age:{type:Number,require:true}
},{
    versionKey:false,
    timestamps:true
})

// createing a model

const Students = mongoose.model("student",userSchema)

//get all students

app.get("/students",async(req,res)=>{
try {
    const users = await Students.find({age:{$gt:50}}).lean().exec()
    res.send({users})
} catch(err){
    res.status(400).json({status:"error",message:err.message})
}
})

// post a students
app.post("/students",async (req,res)=>{
    try{
    const user = await Students.create(req.body)

    res.status(201).json({user})
} catch(err){
    console.error(err)
}
})

// patch => update

app.patch("/students/:id",async(req,res)=>{
  try{
    const user = await Students.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json({user})
} catch(err){
    res.status(400).json({status:"error",message:err.message})
}
})

// get one 
app.get("/students/:id",async (req,res)=>{
  try{
    const user = await Students.findById(req.params.id).lean().exac()

    res.status(200).json({user})
} catch(err){
    res.status(400).json({status:"error",message:err.message})
}
})

// delete one
app.delete("/students/:id",async(res,req)=>{
  try{
    const user = await Students.findByIdAndDelete(req.params.id);
    
    res.status(500).json({user})
} catch(err){
    res.status(400).json({status:"error",message:err.message})
}
})

// port

app.listen(2345,async function(){
    await connect()
    console.log("running")
}) 