const express = require('express')

const app = express()

app.use(express.json())

app.get("/users",function(req,res){
    const name = req.query.name
    const a = 'apple'
    res.send({a,name})
})

app.get("/users/:id",function(req,res){
    const id = req.params.id

    res.send(id)
})

app.post("/users", function(req,res){
    const body = req.body;

    res.send(body)
})
app.listen(1000,()=>{
    console.log("listening port")
})