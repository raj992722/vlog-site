const {
    createPost,
    getAllPost,
    getPost,
    updatePost,
    deletePost
} =require('../controllers/post-controller');

const express=require('express');
const router=express.Router();



router.route('/post').get(getAllPost).post(createPost);
router.route('/post/:id').get(getPost).patch(updatePost).delete(deletePost);


module.exports=router;