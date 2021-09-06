const express = require('express')

const app = express()

app.use(express.json())

app.get("/",function(req,res){
    const text = "welcome to home page"
    res.send(text)
})

app.get('/usersList', function(req, res) {
    var users = {
            "id": 1001,
            "first_name": "Test First Name",
            "last_name": "Test Last Name",
            "email": "ydalesco0@test.com",
            "gender": "Genderfluid",
            "ip_address": "164.215.194.36",
            "age": 65
    };

    res.send(users);
});

app.listen(2000,()=>{
    console.log("running")
})