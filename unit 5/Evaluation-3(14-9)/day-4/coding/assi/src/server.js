const express = require('express')

const app = express()
const connect = require("./config/db")
const userController =  require("./controller/user.controller")
app.use(express.json())

app.use("/user",userController)

app.listen(2345, async function(){
    await connect()
    console.log("running")
})