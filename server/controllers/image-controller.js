// const { set } = require("mongoose");
const { setCustomError } = require("../middleware/error");




const imageUload=async(req,res)=>{
    const {image}=req.files;
    if(!image){
        throw setCustomError('Image is not found',500);
    }
    const reg=/^image/;
    if(!(reg.test(image.mimetype))){
      
    
        throw setCustomError('File is not image',500);
    }
      image.mv(__dirname+'/upload/'+image.name);
    res.status(200).json({data:image.name});
}

module.exports=imageUload;