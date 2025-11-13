// const { log } = require('console')
const express = require('express')
const postRoutes=require('./Router/postRouter')
require('dotenv').config()
const { dbconnection } = require('./config/db');
const { createPost } = require('./Controller/postController');
const app = express()
dbconnection();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/postapi',postRoutes)
app.get('/',(res,req)=>{
    res.send("Post Application")
})


app.listen(process.env.PORT, err=>{
    if(err) throw err
    console.log(`The server is running ${process.env.PORT}`);
    
})