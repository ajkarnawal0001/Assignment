const express = require('express')

const app = express()

app.use(express.json())


app.post("/users",sayPostUser,sayPostUser,function(req,res){
    const body = req.body
    res.send(body)
})

app.get("/users",function(req,res) {
    const name = req.query.name;
    const age = req.query.age;

    res.send({name,age})
})

app.get("/users/:id",sayHello ,function(req,res){
    const id = req.param.id
    res.send(id)

})

app.put("/user/:id",sayHello, function (req, res) {
    const id = req.params.id
    res.send(id)
  })
  app.delete('/',sayHello, function (req, res) {
    res.send('DELETE request to homepage')
  })
function sayHello(req,res,next){
    console.log("before req")
    next()
    console.log("after req")
}

function sayPostUser(req,res,next){
    console.log("before post req")
    next()
    console.log("after post req")
}
app.listen(2000,()=>{
    console.log("running")
})