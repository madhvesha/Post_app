const userSchema=require('../Schema/UserSchema')

exports.registerNewUser=async(req,res)=>{
    let payload=req.body
    await userSchema.create(payload)
    console.log("Registering New User",payload)
    res.status(200).json({success:true,message:"User Registered Successfully",payload})
}