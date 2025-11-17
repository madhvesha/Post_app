const mongoose=require('mongoose')

const userSchema= new mongoose({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

modules.exports=mongoose.model("User",userSchema)