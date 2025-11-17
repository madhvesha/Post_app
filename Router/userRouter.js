const {Router}=require('express')

const {userSchema}=require('../Schema/UserSchema')

const router=Router()
router.post('/user',userSchema)

module.exports=router;