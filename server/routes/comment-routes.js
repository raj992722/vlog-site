const {
    createComment,
    getAllComment,
    getComment,
    updateComment,
    deleteComment
} =require('../controllers/comment-controller');


const express=require('express');

const router=express.Router();


router.route('/comment').get(getAllComment).post(createComment);

router.route('/comment/:id').get(getComment).patch(updateComment).delete(deleteComment);


module.exports=router;