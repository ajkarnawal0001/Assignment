const express = require('express')
const connect = require("./config/db")

const app = express()
app.use(express.json())

const userController = require("./controller/user.controller")
const tagController = require("./controller/tag.controller")
const postController = require("./controller/post.controller")
const commentController = require("./controller/comment.controller")

app.use("/users",userController)
app.use("/tags",tagController)
app.use("/posts",postController)
app.use("/comments",commentController)


app.listen(8000,async function(){
    await connect();
    console.log("running")
})