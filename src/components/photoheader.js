import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import headerPhoto1 from '../resources/images/headerphoto1.jpg'
import headerPhoto2 from '../resources/images/headerphoto2.jpg'
import { GpsFixed } from '@mui/icons-material';


function PhotoAppBar() {
    var counter = 0;
    const images = [headerPhoto1,headerPhoto2];

    const imageClick = () => {

        document.getElementById("1").src = images[counter];
        counter = (counter+1)%2;
        console.log(counter);
        
    }
    return <Box>
        <div class="headerContainer" style={{height: '200px', width: '100%',background: 'red',position:'fixed',borderBottom:'solid white 3px',zIndex: 0}}>

</div>
<div class="photoContainer" style={{background: 'black',marginLeft: '150px',marginTop: '75px',border:'solid white 3px',height: '300px', width: '200px',position:'fixed',zIndex: 1}}>
    
    <img class="headerimg" id="1" style={{ height: '100%', width: '100%', opacity: 1.0, zIndex: 1}} src={headerPhoto1} onClick={() => imageClick()} />
     
</div>
    </Box>

}
export default PhotoAppBar;
