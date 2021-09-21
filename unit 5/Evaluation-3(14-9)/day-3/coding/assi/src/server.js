const express  = require('express')

const connect = require('./config/db')
const app = express()

const usersController = require('./controller/user.controller')
app.use("/users",usersController)

const start = async () =>{
    await connect()

    app.listen(2244,()=>{
        console.log("running")
    })
}

module.exports = start

