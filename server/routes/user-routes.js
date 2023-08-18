
const express=require('express');

const {loginUser,signupUser,LogoutUser}=require('../controllers/user-controller')

const router=express.Router();


router.route('/login').post(loginUser);

router.route('/sign').post(signupUser);

router.route('/logout').post(LogoutUser);


module.exports=router;