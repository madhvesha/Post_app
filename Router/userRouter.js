const {Router}=require('express')
const router=Router()
const {registerNewUser}=require('../Controller/userController')
router.post('/user',registerNewUser)

module.exports=router;