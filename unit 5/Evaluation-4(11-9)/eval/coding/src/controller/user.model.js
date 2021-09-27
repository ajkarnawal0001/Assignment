const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,minLength:8},
    password:{type:String,required:true},
    name:{type:String,required:true},
})