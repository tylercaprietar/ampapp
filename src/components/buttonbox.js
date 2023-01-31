import { Button, Box, Stack } from '@mui/material';
import * as React from 'react';

function ButtonBox(){
    
    return  <Box class="ButtonBox" style={{marginLeft: '356px', marginTop: '203px', height: '172px', width: '150px',background: 'transparent',position:'fixed'}}>
        <Stack class="buttonContainer" spacing={'auto'} style={{height: '80%', width: '80%',marginLeft: '10%',marginTop: '10%'}}>
        <Button id='aboutMeBtn'variant='outlined' sx={{color: 'black'}} ><b>ABOUT ME</b></Button>
        <Button id='aboutMeBtn'variant='outlined' sx={{color: 'black'}}  ><b>RESUME</b></Button>
        <Button id='aboutMeBtn'variant='outlined' sx={{color: 'black'}} ><b>PROJECTS</b></Button>
        </Stack>
    </Box>

}
export default ButtonBox;