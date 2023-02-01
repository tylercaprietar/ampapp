
import './App.css';
import tcLogo from './resources/images/TC White.png';

import SlideshowOnClick from './components/slideshowOnClick';

function logoOnClick(){
  console.log("Clicked");
  document.getElementById('appContainer').backgroundColor = 'red';
} //

function App() {
 
 
  
  return (
    <div className="App">
      <div id='appContainer' class='appContainer'>
        

        
        
        
      </div>
      <div class="contentContainer">
        <div class="personalPhotoContainer">
          <div id="pC1" class="photoContainer" style={{background: 'transparent',height: '100%', width: '100%',position:'relative'}}>
            <div style={{position: "absolute", height: '100%', width: '100%',zIndex: 5}}>
              <img class="headerimg" id="headerimg1" style={{ height: '100%', width: '100%', opacity: 1.0, zIndex: 1}} src={tcLogo} onClick={logoOnClick}  />
            </div>
      </div>
      
          </div>
          <div class='typewriter'>
            <h1 id="titleText" style={{fontFamily: 'monospace', fontSize: '30px'}}><b>Who is Tyler Caprietar?</b></h1>
          </div>
      </div>
    </div>
    
  );
}

export default App;
