const notfound=(req,res,next)=>{
    res.status(404).json({msg:'Route does not exist'});
}

class CustomAPIError extends Error{
    constructor(messge,statusCode){
        super(messge);
        this.statusCode=statusCode;
        this.name='Custom API error';
    }
}

const setCustomError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode);
}


const errorHandler=(error,req,res,next)=>{
    if(error instanceof CustomAPIError){
        return res.status(error.statusCode).json({message:error.message,name:error.name});
    }
    return res.status(500).json({msg:'Server is not reachable righ now'});
}

module.exports={
    errorHandler,
    setCustomError,
    notfound,
    CustomAPIError
}