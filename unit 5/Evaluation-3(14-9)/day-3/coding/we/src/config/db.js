const mongoose = require('mongoose')

const connect = () =>  {
    return mongoose.connect("mongodb://127.0.0.1:27017/masai",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    })
}

module.exports = connect;