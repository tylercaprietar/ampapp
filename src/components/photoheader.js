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
import headerPhoto3 from '../resources/images/headerphoto3.jpg'

import { GpsFixed } from '@mui/icons-material';


function PhotoAppBar(testing) {

    console.log(testing);

    function fadeIn(el) {
        return new Promise(function(resolve,reject){
        el.style.opacity = 0;
        var tick = function () {
            el.style.opacity = +el.style.opacity + 0.01;
            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
        tick();
        });
    }

    function fadeOut(el) {
        return new Promise(function(resolve,reject){
        el.style.opacity = 1;
        var tick = function () {
            el.style.opacity = +el.style.opacity - 0.01;
            if (+el.style.opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
        tick();
        });
    }
    

    
    const images = [headerPhoto1,headerPhoto2,headerPhoto3];
    const numImages = images.length;
    var counter = 0;

     function imageClick() {
        console.log("Clicked!");
        var topImg = document.getElementById("headerimg1");
        var bottomImg = document.getElementById("headerimg2");
        var nextImage = images[(numImages-1+counter)%numImages];
        console.log((numImages-1+counter)%numImages);
        if (topImg.style.opacity > 0){
            fadeOut(topImg);
            fadeIn(bottomImg);
            Promise.all([ fadeOut(topImg),
                fadeIn(bottomImg)]).then(function() {
                    topImg.src = nextImage;
              });
            
        } else if (bottomImg.style.opacity > 0){
            fadeOut(bottomImg);
            fadeIn(topImg);
            Promise.all([ fadeOut(bottomImg),
                fadeIn(topImg)]).then(function() {
                    topImg.src = nextImage;
              });
        }
        counter = (counter+1)%numImages;
        console.log(counter);

        
        
    }
    return <Box>
        <div class="headerContainer" style={{height: '200px', width: '100%',background: 'red',position:'fixed',borderBottom:'solid white 3px',zIndex: 0}}>

</div>
<div id="pC1" class="photoContainer" style={{background: 'black',marginLeft: '150px',marginTop: '75px',border:'solid white 3px',height: '300px', width: '200px',position:'fixed',zIndex: 2}}>
    <div style={{position: "absolute", height: '100%', width: '100%',zIndex: 5}}>
        <img class="headerimg" id="headerimg1" style={{ height: '100%', width: '100%', opacity: 1.0, zIndex: 1}} src={images[0]} onClick={() => imageClick()} />
    </div>

    <div  style={{position: "absolute", height: '100%', width: '100%',zIndex: 4}}>
        <img class="headerimg" id="headerimg2" style={{ height: '100%', width: '100%', opacity: 0.0, zIndex: 1}} src={images[1]} onClick={() => imageClick()} />
    </div>
    
</div>

    </Box>

}
export default PhotoAppBar;
