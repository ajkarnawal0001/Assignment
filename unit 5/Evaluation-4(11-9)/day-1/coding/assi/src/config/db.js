const mongoose = require('mongoose')

module.exports = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/person-auth",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        userFindAndModify:true,
        useCreateIndex:true
    })
}
