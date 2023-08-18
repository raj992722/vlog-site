const Post =require('../models/post');
const {setCustomError}=require('../middleware/error');


const createPost=async(req,res)=>{
    try {
      const post=await Post.create(req.body);
      res.status(200).json({sucess:true,data:post});  
    } catch (error) {
throw setCustomError('Error in creating post',500);
    }
}

const getAllPost=async(req,res)=>{
    try{
        const posts=await Post.find({});
        res.status(200).json({success:true,data:posts});
    }catch(error){
        throw setCustomError('There is error in fetching all post',500);
    }
}

const getPost=async(req,res)=>{
    const id=req.params.id;
    const post =await Post.findById(id);
    if(!post){
        throw setCustomError(`There is no post with given id ${id}`,500);
    }
    res.status(200).json({success:true,data:post});
}

const updatePost=async(req,res)=>{
    const id=req.params.id;
    const post =await Post.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true});
    if(!post){
        throw setCustomError(`There is error in updating post with id :${id}`,500);
    }
    res.status(200).json({success:true,data:post});
}

const deletePost=async(req,res)=>{
    const id=req.params.id;
    const post=await Post.findByIdAndDelete(id);

    if(!post){
        throw setCustomError(`There is no post with given id ${id}`,500);
    }

    res.status(200).json({success:true,data:post});
}


module.exports={
    createPost,
    getAllPost,
    getPost,
    updatePost,
    deletePost
}