const mongoose=require('mongoose');


const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required field'],
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    picture:{
        type:String,
        required:false
    },
    categories:{
        type:Array,
        required:false
    }

},{timestamps:true});


module.exports=mongoose.model('Post',PostSchema);