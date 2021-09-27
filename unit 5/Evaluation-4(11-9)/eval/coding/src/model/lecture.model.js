const mongoose = require('mongoose');


const lectureSchema = new mongoose.Schema({
    role:{type:String,required:true},
    instructor:{type:String,required:true},
    name:{type:String,required:true},
    creater:{type:mongoose.Schema.Types.ObjectId, ref:"users"}
},{
    timestamps:true
})

module.exports = mongoose.model('lecture',lectureSchema)