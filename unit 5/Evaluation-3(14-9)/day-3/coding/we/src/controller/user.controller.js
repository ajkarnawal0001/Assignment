const express = require("express")
const {body,validationResult} = require('express-validator')
const Model = require('../model/user.model')
const app = express()
app.use(express.json())
const userValidSchema = require("./userValid")
const router = express.Router()

router.post("",async function (req,res){
    const user = await Model.create(req.body);

    res.status(201)
})

module.exports =router
