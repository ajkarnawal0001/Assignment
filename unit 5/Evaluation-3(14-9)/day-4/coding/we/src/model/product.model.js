const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    image_urls:{type:String,require:true},
})

module.exports = mongoose.model("product",productSchema)