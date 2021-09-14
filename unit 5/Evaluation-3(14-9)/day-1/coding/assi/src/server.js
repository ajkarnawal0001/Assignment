const express = require('express')
const connect = require("../config/db")

const app = express()
app.use(express.json())

const userController = require("../controller/user.controller")
const studentController = require("../controller/student.controller")
const evaluationController = require("../controller/evaluation.controller")


app.use("/users",userController)
app.use("/student",studentController)
app.use("/evaluation",evaluationController)


app.listen(8000,async function(){
    await connect();
    console.log("running")
})