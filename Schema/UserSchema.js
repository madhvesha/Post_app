const mongoose=require('mongoose')
const {Schema}=require('mongoose')
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')

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

userSchema.methods.generateToken= async function () {
    return await jwt.sign(
        {_id:this._id},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"2m"}

    );
}



module.exports=mongoose.model("User",userSchema)