import { useState ,useEffect,useContext} from "react";

import {useNavigate} from 'react-router-dom';


import {API} from '../../api/services';

import {Datacontext} from '../../context/DataProvider';

import {Box,Button,styled,TextField,Typography} from '@mui/material';

import { setAccessToken } from "../../utils/common-utils";


const Component=styled(Box);


const Image=styled(img);


const Wrapper=styled(Box);



const LoginButton=styled(Button);


const SignUpButton=styled(Button);


const Text=styled(Typography);


const Error=styled(Typography);


const loginInitialValues={
    username:"",
    password:""
};

const signUpInitialValues={
    name:"",
    username:"",
    password:"",
}


const Login=({isUserAuthenticated})=>{
    const [login,setLogin]=useState(loginInitialValues);

    const [signUp,setSignUp]=useState(signUpInitialValues);

    const [error,setError]=useState('');

    const [account,toggleAccount]=useState('login');

    const navigate=useNavigate();

    const {setAccount}=useContext(Datacontext);

    const imgUrl='';

    const handleLoginChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});

    }

    const handleLoginSubmit=async(e)=>{
        e.preventDefault();

       try {
        const response=await API.userLogin(login);
        if(response.success){
            setError('');
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            setAccount({name:response.data.name,username:response.data.username});
            setAccessToken(response.data.accessToken);
            navigate('/');
        }else{
            setError('Password or username does not match');
        }



       } catch (error) {
        setError('Something went wrong Please try again')
       }
    }

    const handleSignupChange=(e)=>{
        setSignUp({...signUp,[e.target.name]:e.target.value});
    }

    const handleSignupSubmit=async(e)=>{
        e.preventDefault();

       try {
        const response=await API.signUp(signUp);
        if(response.success){
            setError('');
            toggleAccount('login');

        }
        
       } catch (error) {
            setError('There is error in connecting to server')
       }
    }

    const toggleSignUp=()=>{
        account=='login'? toggleAccount('signup'):toggleAccount('login');
    }

    return (
        <Component>
        <Box>
            <Image src={imgUrl} alt='SOMETHING BACKGROUND RELATED' />

            {
                account ==='login' ? <Wrapper>
                   <TextField label='Username' variant="standard" value={login.username} name="username" onClick={handleLoginChange} />
                   <TextField label='Password' variant="standard" value={login.password} name="password" onClick={handleLoginChange} />

                   {error && <Error>{error}</Error>}

                   <LoginButton onClick={handleLoginSubmit}>Login</LoginButton>
                     <span>Or</span>
                     <SignUpButton onClick={toggleSignUp}>Create an Account</SignUpButton>
                </Wrapper>:<Wrapper>
                <TextField label='Username' variant="standard" value={signUp.username} name="username" onClick={handleSignupChange} />
                <TextField label='Name' variant="standard" value={signUp.name} name="password" onClick={handleSignupChange} />
                <TextField label='Password' variant="standard" value={signUp.password} name="password" onClick={handleSignupChange} />

                {error && <Error>{error}</Error>}

                <SignUpButton onClick={handleSignupSubmit}>SIGN UP</SignUpButton>
                  <span>Or</span>
                  <LoginButton onClick={toggleSignUp}>Already have an Account</LoginButton>
                
                </Wrapper>
            }
        
        </Box>
        
        </Component>
    )

    
}

export default Login;
