const express  = require("express")
require("dotenv").config()

const {register,login} = require("./controller/auth.controller")
const connect = require("./config/db")
const app = express()
app.use(express.json())
app.post("/register", register)
app.post("/login",login)

app.listen(process.env.SERVER_PORT, async function(){
    await connect();
    console.log("running port ")
})