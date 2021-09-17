const express = require('express')

const connect = require("./config/db")
const app = express()

app.listen(2345, async function(){
    await connect()
    console.log("running")
})