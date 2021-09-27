const express = require('express')

const connect = require("./config/db")

const app = express();
app.use(express.json())
const lectureController = require("./controller/lecture.controller")
const {signup,signin} = require('./controller/auth.controller')
const userController = require("./controller/user.controller")

app.post("/signup",signup)
app.post("/signin",signin)
app.use("/users",userController)
app.use("/admin",lectureController)

const start = async () =>{
    await connect()
    app.listen(2244,()=>{
        console.log("running..")
    })
}

module.exports = start