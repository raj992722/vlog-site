import { useState,useEffect,useContext } from "react";

import {useNavigate,useLocation} from 'react-router-dom';

import {FormControl,InputBase,Button,Box,styled} from '@mui/material';


import {API} from '../../api/services';

import {Datacontext} from '../../context/DataProvider';


const postInitialaValues={
    title:'',
    description:'',
    username:'',
    picture:'',
    categories:''
}


const Post=()=>{
    const [file,setfile]=useState(null);
    const [post,setPost]=useState(postInitialaValues);

    const {account}=useContext(Datacontext);
    const navigate=useNavigate();
    const location=useLocation();

    post.categories=location.search?.split('=')[1];

    useEffect(()=>{
       async function getImage(){
            if(file){
                const data=new FormData();
                data.append('name',file.name);
                data.append('file',file);

              const imagedata=  await API.uploadImage(data);
              post.picture=imagedata.data;

            }
        }
        getImage();
        post.username=account.username;
    },[file]);
     
    const handleInputChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const data=await API.createPost(post);
    }


    return (
        <div>
        
        <form>
           <label htmlFor="img">Upload a image</label>
           <input id="img" type="file" disabled onChange={(e)=>setfile(e.target.files[0])}/>
           <label htmlFor="title">Tilte</label>
           <input  id="title" name="title" onChange={handleInputChange}/>
           <label htmlFor="desc">Description</label>
           <textarea id="desc"name="description"></textarea>
           <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default Post;