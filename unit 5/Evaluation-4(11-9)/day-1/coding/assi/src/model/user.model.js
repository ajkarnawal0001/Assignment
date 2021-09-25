const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
    {
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8},
},{
    timestamps:true
})

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();

    bcrypt.hash(this.password,8,function(err,hash){
        if(err) return next(err);

        this.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function (){
    const passwordHash = this.password
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password,passwordHash,function(err,same){
            if(err) return reject(err)

            resolve(same)
        })
    })
}
const User = mongoose.model("user",userSchema)

module.exports = User