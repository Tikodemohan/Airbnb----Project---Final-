

const express = require('express');
const app= express();
const users=require("./routes/user.js")
const posts=require("./routes/post.js")
const session=require("express-session")
const flash=require("connect-flash")

app.use(session({
    secret:"mysecretstring",
}))

app.get("/test",(req,res)=>{
    res.send("hello world");
});

app.listen(3000,()=>{
    console.log("server is listining to 3000");
})
