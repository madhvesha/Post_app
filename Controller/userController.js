const userSchema=require('../Schema/UserSchema')

exports.registerNewUser=async(req,res)=>{
    let payload=req.body
    await userSchema.create(payload)
    res.status(201)
    .json({success:true,message:"User Registered Successfully",payload})
}

exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res
        .status(400)
        .json({success:false,message:"Email and Password are mandatory"})
    }
    else{
        const user=await userSchema.findOne({email}).select("+password")
        // console.log(user)
        if(!user){
            res.status(400)
            .json({success:false,message:"No User Found"})
        }
        else{
            let isMatch=await user.comparePasswords(password)
            if(isMatch){
                res.status(200).json({success:false,message:"Login Successful"})
            }
            else{
                res.status(400)
                .json({success:false,message:"Invalid Password"})
            }
        }
    }
}
