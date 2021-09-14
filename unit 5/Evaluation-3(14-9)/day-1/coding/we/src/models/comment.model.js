const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        res:"post",
        required:true
    }
},{
    versionKey:false,
    timeStamps:true,
})

module.exports = mongoose.model("comment",commentSchema)
