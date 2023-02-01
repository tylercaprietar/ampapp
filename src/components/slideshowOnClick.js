
import * as React from 'react';
 
//Replace these images
import img1 from '../resources/images/img1.jpg'
import img2 from '../resources/images/img2.jpg'
import img3 from '../resources/images/img3.jpg'

const images = [img1,img2,img3];


function SlideshowOnClick() {
    
    return <div id="pC1" class="photoContainer" style={{background: 'black',height: '100%', width: '100%',position:'relative'}}>
    <div style={{position: "absolute", height: '100%', width: '100%',zIndex: 5}}>
        <img class="headerimg" id="headerimg1" style={{ height: '100%', width: '100%', opacity: 1.0, zIndex: 1}} src={images[0]}  />
    </div>

    <div  style={{position: "absolute", height: '100%', width: '100%',zIndex: 4}}>
        <img class="headerimg" id="headerimg2" style={{ height: '100%', width: '100%', opacity: 0.0, zIndex: 1}} src={images[1]}  />
    </div>
    
</div>

        
}
export default SlideshowOnClick;