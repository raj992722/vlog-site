import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';




export const Login=()=>{
    const [values,setValues]=useState({});
    const handlechange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        const user={
            username:values.email,
            password:values.password
        }
        // const newUser=JSON.stringify(user);
        // await fetch('http://localhost:3000/api/v1/user/login',{
        //     method:'POST',
        //     body:{
        //         newUser
        //     },
            // headers:{
            //     "Content-Type":"application/json",
            //     "Acess-Control-Allow-Origin":"*"
            // }
        // })
        const data=await axios.post('http://localhost:3000/api/v1/user/login',{
        
            username:values.email,
            password:values.password
        ,
    // headers:{
    //     'content-type':"application/json"
    // }
    })
        console.log(values,data);
    }
    return (
        <Box component='form' container noValidate autoComplete='off'>
        <FormControl item>
           <InputLabel htmlFor='email'>Email</InputLabel>
           <Input id='email' name='email' required onChange={handlechange} />
           
        </FormControl>
        <FormControl item>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input id='password' name='password' required onChange={handlechange}></Input>
        </FormControl>

        <Button onClick={handleSubmit}>Submit</Button>
        </Box> 
    )
}