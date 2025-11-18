const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const bcrypt =require('bcrypt')

const userSchema= new Schema({
    email:{
        type: String,
        required: [true,"Email Should be String"],
        unique:true
    },username:{
        type: String,
        required: [true,"Username Should be String"]
    },
    password:{
        type:String,
        required:[true,"password Should be String"],
        minLength:6,
        maxLength:20,
        select:false
    }
});

userSchema.pre("save",async function(){
    let salt =await bcrypt.genSalt(10);
    // console.log(salt)
    this.password=await bcrypt.hash(this.password,salt)
});

userSchema.methods.comparePasswords=async function (pass){
    return await bcrypt.compare(pass,this.password)
}

module.exports=mongoose.model("User",userSchema)