const { Router } = require('express');
const {upload}=require('../config/multer')
const { createPost } = require('../Controller/postController');

const router = Router();

router.post('/post',upload.single('post'), createPost);
module.exports = router;  