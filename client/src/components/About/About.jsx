import {Box,Typography,Link} from '@mui/material';

import {GitHub,Email,Instagram} from '@mui/icons-material';
import styled from 'styled-components';




const Banner=styled(Box)`
background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
width: 100%;
height: 50vh;
background-position: left 0px bottom 0px;
background-size: cover;

`;

const Wrapper=styled(Box)`
    padding:20px;
`


const Text=styled(Typography)

const About=()=>{
    return (
        <Box>
        <Banner />
        <Wrapper>
        <Typography>
                 A Enthusiastic Engineer
        </Typography>
        <Text>
        I am a fullstack developer from a different background and it is very hard for us to shift 
          
        
       as their lot to learn and from things ,I have learned till now, I have created some projects which you can see on 
       my GitHub <Box component={span}><GitHub /></Box>.
       
        </Text>
        <Text>
        Or would you like to have chat with me. You can find me on Instagram <Box component={span}><Instagram /> </Box>
        </Text>
        or you can mail me <Box><Email /></Box>
        </Wrapper>
        
        </Box>
    )
}


export default About;