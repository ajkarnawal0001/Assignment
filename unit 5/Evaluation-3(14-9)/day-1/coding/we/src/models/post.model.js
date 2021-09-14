const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    is_deleted:{type:Boolean,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        res:"user",
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
    timeStamps:true,
})

module.exports = mongoose.model("post",postSchema)
