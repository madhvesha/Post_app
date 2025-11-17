const userSchema=require('../Schema/UserSchema')

exports.registerNewUser=async(req,res)=>{
    let payload=req.body
    await userSchema.create(payload)
    res.status(201)
    .json({success:true,message:"User Registered Successfully",payload})
}


