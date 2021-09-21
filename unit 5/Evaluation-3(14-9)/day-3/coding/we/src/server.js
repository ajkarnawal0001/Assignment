const express = require('express')
const connect = require('./config/db')
const app = express()

const productController = require('./controller/user.controller')
app.use("/product",productController)


app.listen(2244,async function(){
    await connect()
    console.log("running")
})