const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
    name:{type:String,required:true}
},{
    timestamps:true
})

const User = mongoose.model("users",userSchema)

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();

    bcrypt.hash(this.password, 8 , (err,hash)=>{
        if(err) return next(err)

        this.password = hash
    })
})

module.exports = User;