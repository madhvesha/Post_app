// const { log } = require('console')
const express = require('express')
const {postRoutes,userRoutes}=require('./Router/postRouter')
require('dotenv').config()
const { dbconnection } = require('./config/db');
const { createPost } = require('./Controller/postController');
const app = express()
dbconnection();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/postapi',postRoutes)
app.use('/userapi',userRoutes)
app.get('/',(req,res)=>{
    res.send("Post Application")
})


app.listen(process.env.PORT, err=>{
    if(err) throw err
    console.log(`The server is running ${process.env.PORT}`);
    
})


/*
    !UserSchema.js
       ! username
       ! password

    
    ?UserController.js
       ! registerUser
        loginUser        optional

    ?UserRouter.js
     ?   register


*/