const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    roll_id:{type:Number,required:true},
    batch:{type:String,required:true},
    is_deleted:{type:Boolean,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        res:"user",
        required:true
    },
    eval_id:[
        {
        type:mongoose.Schema.Types.ObjectId,
        res:"evaluation",
        required:false
        }
    ]
},{
    versionKey:false,
    timeStamps:true,
})

module.exports = mongoose.model("student",studentSchema)
