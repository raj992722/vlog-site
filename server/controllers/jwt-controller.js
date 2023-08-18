require('dotenv').config();
const jwt=require('jsonwebtoken');


const Token=require('../models/token');


const {setCustomError}=require('../middleware/error');

const authenticateToken=async(req,res,next)=>{
    const authHeader=req.headers.Authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ') ){
        throw setCustomError('Token is missing',500);
    }
    const token=authHeader.splits(' ')[1];
    const decoded=jwt.verify(token,process.env.ACCESS_TOKEN);
    if(!decoded){
        throw setCustomError('Token is invalid',500);
    }
    req.user=decoded.username;
    next();
}

const createToken=async(req,res)=>{
    const refreshToken=req.body.token.split(' ')[1];
    if(!refreshToken){
        throw setCustomError('Refresh token is missing',500);
    }
    const token=await Token.findOne({token:refreshToken});
    if(!token){
        throw setCustomError('Refresh token is invalid',500);
    }
    const decoded=jwt.verify(token,process.env.REFRESH_TOKEN);
    if(!decoded){
        throw setCustomError('Refresh token is not verified',500);
    }
    const accessToken=jwt.sign(decoded,process.env.ACCESS_TOKEN,{expiresIn:'15m'});
    res.status(200).json({success:true,token:accessToken});
}



module.exports={
    createToken,
    authenticateToken
}