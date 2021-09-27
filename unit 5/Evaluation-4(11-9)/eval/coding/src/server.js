const express = require('express')

const connect = require("./config/db")

const app = express();
app.use(express.json())
const {signup,signin} = require('./controller/auth.controller')
app.post("/signup",signup)
app.post("/signin",signin)

const start = async () =>{
    app.listen(2244,()=>{
        console.log("running..")
    })
}

module.exports = start