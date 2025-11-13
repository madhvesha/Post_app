const postSchema = require('../Schema/postschema')

exports.createPost = async(req,res)=>{

    let payload={
        post:req.file.path,
        post_name:req.body.post_name,
        post_description:req.body.post_description
    }
    console.log(payload)
    await postSchema.create(payload)
    res.status(200).json({ message: 'Post created successfully',payload});

}
