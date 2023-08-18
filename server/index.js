require('dotenv').config();
require('express-async-errors');

const connectDB = require('./db/connection');
const {notfound,errorHandler}=require('./middleware/error')

const express=require('express');
const cors=require('cors');
const fileUpload=require('express-fileupload');

const UserRouter=require('./routes/user-routes');

const PostRouter=require('./routes/post-routes');

const CommentRouter=require('./routes/comment-routes');

const ImageRouter=require('./routes/image-routes');

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload(
    // limits:{
    //     fieldSize:10000000,
    // },
    // abortOnLimit:true
));

app.use(cors());

app.use(express.static('./upload'));

app.use((req,res,next)=>{
    // res.set('Access-Content-Allow-Origin','*');
    // res.set('Access-Content-Allow-Method',["Post","Get","Patch","Delete"]);

    // res.set('Access-Content-Allow-Headers',"Content-Type");
    // res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.set('Access-Control-Allow-Credentials', 'true');
    next();
})



app.use('/api/v1/user',UserRouter);
app.use('/api/v1/user',PostRouter);
app.use('/api/v1/user',CommentRouter);
app.use('/api/v1/user',ImageRouter);





app.use(notfound);
app.use(errorHandler);


const port=process.env.PORT || 3000;

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is running on port : ${port}`));
    }catch(error){
        console.log(error);
    }
}

start();


// 9FnOFapGRL19Qled

