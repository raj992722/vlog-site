import Post from "./post";


import {API}  from '../../api/services';
import { useEffect, useState } from "react";



const Posts=()=>{
    const [posts,setPosts]=useState(null);

    useEffect(()=>{
        const fetchPosts=async()=>{
            const response=await API.getAllPosts();
            if(response.success){
                setPosts(response.data);
            }
        };
        fetchPosts();
    },[posts]);


    return (
        <div>
        {
            posts && posts.map(post=>{
                retutn (
                    <Post {...post} />
                )
            })
        }
        
        </div>
    )
}

export default Posts;