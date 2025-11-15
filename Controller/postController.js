const postSchema = require('../Schema/postschema')

exports.createPost = async(req,res)=>{
    const post =  req.file ? req.file.filename : undefined;
    const {post_name,post_description} = req.body
    const postsend = await postSchema.create({post_name,post_description,post})
    res.status(200).json({ message: 'Contact created successfully', postsend });

};

exports.getAllPosts=async(req,res)=>{
    let payload=await postSchema.find();
    res.status(200).json({ message: 'Post Fetched Successfully',payload})

}
exports.deletePost=async(req,res)=>{
    await postSchema.deleteOne({_id:req.params.id})
     res.status(200).json({ message: 'Post deleted Successfully'})
}
exports.getSinglePost=(req,res)=>{
    let payload=postSchema.find({_id:req.params.id})
    res.status(200).json({message:"Post Fetched"})
}

exports.updatePost=async(req,res)=>{
    const{post_name,post_description}=req.body
    const post=req.file ? req.file.filename:undefined;
    const updateData={post_name,post_description}
    if(post){updateData.post=post}
    const updatePost=await postSchema.findByIdAndUpdate(
        req.params._id,updateData,{new:true},
        res.status(200).json({message:'post Updated Successfully',updatePost})
    )
}