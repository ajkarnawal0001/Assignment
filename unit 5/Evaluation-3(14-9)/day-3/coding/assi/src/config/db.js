const mongoose = require('mongoose')

const connect = () =>{
    return mongoose.connect("mongodb://localhost:27017/validation",{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    })
}

module.exports = connect;