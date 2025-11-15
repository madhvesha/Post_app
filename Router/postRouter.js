const { Router } = require('express');
const {upload}=require('../config/multer')
const { createPost, getAllPosts, deletePost, getSinglePost, updatePost } = require('../Controller/postController');

const router = Router();

router.post("/post",upload.single('post'), createPost);
router.get("/post",getAllPosts)
router.delete("/post/:id",deletePost);
router.get("/post/:id",getSinglePost)
router.put('/post/:id',upload.single('post'),updatePost)
module.exports = router;  