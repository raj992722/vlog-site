require('dotenv').config();

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');

const Token=require('../models/token');

const User=require('../models/user');

const {setCustomError}=require('../middleware/error')


const signupUser=async(req,res)=>{
    try {
        const {username,name,password}=req.body;
    const user={username,name};
    const hashedPassword=await bcrypt.hash(password,10);
    user.password=hashedPassword;
    const data=await User.create(user);
    res.status(200).json({msg:`${name} account created succesfully`,success:true});
    } catch (error) {
        const err=setCustomError('Error while signing up',500);
        throw err;
    }
}

const loginUser=async(req,res)=>{
    const user=req.body.username;
    console.log(req.body);
    const userProfile=await User.findOne({username:user});
    if(!userProfile){
        const error=setCustomError(`${user} does not exist`,404);
        throw error;
    }
    const password=req.body.password;
    try {
        const match=await bcrypt.compare(password,userProfile.password);
        if(match){
            const token=jwt.sign({id:userProfile._id,name:userProfile.username},process.env.ACCESS_TOKEN,{expiresIn:'15m'});
            const refreshToken=jwt.sign({id:userProfile._id,name:userProfile.username},process.env.REFRESH_TOKEN);
            await Token.create({token:refreshToken});
            res.status(200).json({success:true,token:token,refreshToken:refreshToken,name:userProfile.name,username:userProfile.username,id:userProfile._id});

        }else{
            const error=setCustomError('Password does not match',404);
            throw error;
        }
    } catch (error) {
        throw setCustomError('Error while sign in',500);
    }

}

const LogoutUser=async(req,res)=>{
    const token=req.body.token;
    await Token.deleteOne({token:token});
    res.status(200).json({msg:'Logout successfully',success:true});
}

module.exports={
    loginUser,
    signupUser,
    LogoutUser
}