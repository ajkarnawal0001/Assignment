const express = require('express')
const app = express()
app.use(express.json())

// const {signup,signin} = require("./controller/auth.controller")
// const userController = require("./controller/user.controller")
// const connect = require("./config/db")

// app.post("/signup", signup)
// app.post("/signin",signin)
// app.use("/user",userController)

const start = async () =>{
    await connect();
    app.listen(2244,()=>{
        console.log("running")
    })
}

module.exports = start;