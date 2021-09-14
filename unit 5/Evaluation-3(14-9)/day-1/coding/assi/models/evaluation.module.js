const mongoose = require('mongoose')

const evaluationSchema = new mongoose.Schema({
    date:{type:Date,required:true},
    topic:{type:String,required:true},
    instructor:{type:String,required:true},
},{
    versionKey:false,
    timeStamps:true,
})

module.exports = mongoose.model("evaluation",evaluationSchema)
