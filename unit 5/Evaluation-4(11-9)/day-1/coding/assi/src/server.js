const express  = require("express")

const {signup,signin} = require("./controller/auth.controller")
const connect = require("./config/db")
const app = express()
app.use(express.json())

app.post("/signup", signup)
app.post("/signin",signin)
app.use("/user",userController)

const start = async () =>{
    await connect();
    app.listen(2244,()=>{
        console.log("running")
   