


const image=require('../controllers/image-controller');


const express=require('express');

const router=express.Router();

router.route('/image').post(image);


module.exports=router;