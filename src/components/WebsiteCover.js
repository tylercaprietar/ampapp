
import {React, Component, useState} from 'react';
import '../App.css';
import tcLogo from '../resources/images/TC White.png';

function WebsiteCover(){

    const [bottomAnimation,setBottomAnimation] = useState('none');
    const [bottomColor,setBottomColor] = useState('transparent');
    const [topAnimation,setTopAnimation] = useState('typing 1.5s steps(30, end), blink-caret .75s step-end 2');
    const [topBorderRightColor,setTopBorderRightColor] = useState('transparent');

    function handleTopAnimationEnd(){
        setBottomColor('white');
        setBottomAnimation('typing 1.5s steps(30, end), blink-caret .75s step-end 2');

        
    }
    return (
        <div className="App">
      {/* Contains the background for changing and such*/}
      <div id='appContainer' class='appContainer'>
        {/*  Contains the pages of the website */}
      <div id='contentContainer' class="contentContainer">

{/* Contains the front page of the website */ }
<div class='frontPage'>

  {/* Contains Title Text 1 */}
  <div class='typewriter' >
    
      <h1 id="topText" style={{fontFamily: 'monospace', fontSize: '30px', animation: topAnimation, borderRight: '.15em solid transparent'}} onAnimationEnd={handleTopAnimationEnd}><b>Who is Tyler Caprietar?</b></h1>
  </div>

  {/*  Contains the spinning logo */}
  <div class="personalPhotoContainer">
  
    <div id="pC1" class="photoContainer" style={{background: 'transparent',height: '100%', width: '100%',position:'relative'}}>
      <div style={{position: "absolute", height: '100%', width: '100%',zIndex: 5}}>
        <img class="headerimg" id="headerimg1" style={{ height: '100%', width: '100%', opacity: 1.0, zIndex: 1}} src={tcLogo}/>
      </div>
    </div>
  </div>

  {/* Contains Title Text 2 */}
  <div class='typewriter' style={{position: 'relative'}}>
    
  <h1 id="bottomText" class="bottomText" style={{fontFamily: 'monospace', fontSize: '30px',color: bottomColor, animation: bottomAnimation}}><b>Click the logo to find out.</b></h1>
  </div>


  

 
</div>

  
</div>

        
        
        
      </div>

      
    </div>
        
    )
    
}

export default WebsiteCover;
