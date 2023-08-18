import { useState,useEffect } from "react";

import {useNavigate,useParams} from 'react-router-dom'

import {API} from '../../api/services';


const initialPost={
    title:'',
    picture:'',
    description:'',
    username:'',
    picture:''
}



const Update=()=>{
    const [post,setPost]=useState(initialPost);

    const [file,setfiles]=useState(null);

    const {id}=useParams();

    useEffect(()=>{
        const fetchdata=async()=>{
            const response=await API.getPostById(id);
            if(response.success){
                setPost(response.data);
            }
        }
        fetchdata();
    },[]);

    const handleInputChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value});

    }

    const handleUpdate=async(e)=>{
        e.preventDefault();
        await API.UpdatePostById(post);
        

    }

    useEffect(()=>{
      async  function getImage(){
            if(file){
                const data=new FormData();
                data.append('filename',file.name);
                data.append('file',file);

                const response=await API.uploadImage(data);

                if(response.success){
                    post.picture=response.data;
                }
            }
        }
    },[file])


    return (
        <div>
        <form>
        <label htmlFor="img">Update Image</label>
        <input id="img" type="file" disabled onChange={(e)=>setfiles(e.target.files[0])}/>

        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={post.title} onChange={handleInputChange}/>
        
        
        <label htmlFor="desc">Description</label>
        <textarea id="desc" name="description" value={post.description} onChange={handleInputChange}></textarea>
       
       <button onClick={handleUpdate}>Update POST</button>
        </form>
        
        </div>
    )
}

export default Update;



