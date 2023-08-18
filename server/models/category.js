const mongoose=require('mongoose');


const CategorySchema=new mongoose.Schema({
    category:{
        type:String,
        required:[true,'Category is required field']
    }
})

module.exports=mongoose.model('Category',CategorySchema);