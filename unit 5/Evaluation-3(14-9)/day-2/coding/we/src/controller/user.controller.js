const express = require('express')

const User = require("../model/user.model")
const Transpoter = require("../config/mail")
const router = express.Router()


router.get("",async (req,res)=>{
    const page = +req.query.page || 1
    const size = +req.query.size || 10

    const offset = (page-1)*10
    const users = await User.find().skip(offset).limit(size).lean().exec()
    
    const totalDocument = await User.find().countDocuments()

    const totalPages = Math.ceil(totalDocument/size)
    users.map(async function(obj){
        await Transpoter.sendMail({
            from: `"Fred Foo 👻" <${obj.email}>`, // sender address
            to: `ajkarnawal0001@gmail.com, akarnawal0001@gmail.com`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: ` Welcome to ABC system ${obj.first_name}`, // plain text body
            html: `<b>${obj.first_name} please confirm your email</b>`, // html body
            // console.log(obj)
          })
      })
    return res.status(200).json({users})

})

module.exports =router


