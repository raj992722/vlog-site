import {Box,Link,Typography} from '@mui/material';

import {Email,GitHub,Instagram} from '@mui/icons-material';
import styled from 'styled-components';



const Banner=styled(Box);


const Wrapper=styled(Box);

const Text=styled(Typography);

const Contact=()=>{
    return (
        <Box>
        <Banner />
        <Wrapper>
        <Text>Getting in touch is easy</Text>
        <Link><Instagram /></Link>
        or mail me on <Link href='mailto:raj992722@gmail.com?Subject=This is subject' target='_blank' ><Email /></Link>
        </Wrapper>
        </Box>
    )
}

export default Contact;