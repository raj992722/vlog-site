import {Box,Typography,styled} from '@mui/material';
// import styled from 'styled-components';



const Image=styled(Box);


const Heading=styled(Typography);

const Subheading=styled(Typography);


const Banner=()=>{
    return (
        <Image>
        <Heading>Bound for INNOVATION</Heading>
        <Subheading>AT YOUR SERVICE</Subheading>
        </Image>
    )
}

export default Banner;
