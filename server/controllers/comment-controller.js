const Comment=require('../models/comment');

const {setCustomError}=require('../middleware/error');



const createComment=async(req,res)=>{
    const comment=await Comment.create(req.body);
    res.status(200).json({success:true,data:comment});
}

const getAllComment=async(req,res)=>{
    const comment=await Comment.find({});
    res.status(200).json({success:true,data:comment});
}

const getComment=async(req,res)=>{
    const comment=await Comment.findById(req.params.id);
    if(!comment){
        throw setCustomError( `There is no comment with given id : ${req.params.id}`,404);
    }
    res.status(200).json({success:true,data:comment});
}


const updateComment=async(req,res)=>{
    const comment=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    if(!comment){
        throw setCustomError( `There is no comment with given id : ${req.params.id}`,404);
    }
    res.status(200).json({success:true,data:comment});
}

const deleteComment=async(req,res)=>{
    const comment=await Comment.findByIdAndDelete(req.params.id);
    if(!comment){
        throw setCustomError( `There is no comment with given id : ${req.params.id}`,404);
    }
    res.status(200).json({success:true,data:comment});
}



module.exports={
    createComment,
    getAllComment,
    getComment,
    updateComment,
    deleteComment
}