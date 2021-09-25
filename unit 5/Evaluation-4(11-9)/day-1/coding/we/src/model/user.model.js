
const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},    
},{
    versionKey:false,
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

userSchema.methods.checkPassword = function(password){
    const passwordHash = this.password
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password,passwordHash,function(err,same){
            if(err) return reject(err)

            resolve(same)
        })
    })
}
module.exports = mongoose.model("user",userSchema)