const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:false},
    image:{type:Array,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product",productSchema)