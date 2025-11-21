const {Router}=require('express')
const router=Router()
const {registerNewUser, loginUser}=require('../Controller/userController')

router.post('/user',registerNewUser)
router.post('/loginUser',loginUser)

module.exports=router;