const {Router}=require('express')
const router=Router()
const {registerNewUser, loginUser}=require('../Controller/userController')
const { route } = require('./postRouter')
router.post('/user',registerNewUser)
router.post('/loginUser',loginUser)

module.exports=router;