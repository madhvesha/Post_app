const express = require('express')
const postRoutes=require('./Router/postRouter')
const userRoutes=require('./Router/userRouter')
require('dotenv').config()
const { dbconnection } = require('./config/db');
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