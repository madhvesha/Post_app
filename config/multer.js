const multer=require('multer')

const photo=multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log("🔥 Multer Destination Hit");   
        cb(null,"public/images/")
    },
    filename:(req,file,cb)=>{
         console.log("🔥 Multer Filename Hit", file.originalname);
        cb(null,Date.now() + file.originalname)
    }
})
exports.upload=multer({storage:photo})