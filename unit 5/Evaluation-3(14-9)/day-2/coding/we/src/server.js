const express = require('express')
const connect = require('./config/db')
const app = express()

const userController = require('./controller/user.controller')
app.use("/students",userController)
app.listen(2244,async function(){
    await connect()
    console.log("running")
})