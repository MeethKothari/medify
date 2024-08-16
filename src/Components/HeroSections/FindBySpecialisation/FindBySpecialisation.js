import React, { useState } from 'react';
import './FindBySpecialisation.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';

const FindBySpecialisation = () => {
  const [viewAll, setViewAll] = useState(false);
  
  const handleViewAll = () => {
    if ( viewAll === false ){
        setViewAll(true);
    }
    else {
        setViewAll(false);
    }
  }
  
  return (
    <div className='container'>
        <h1 style={{color:'rgba(27, 60, 116, 1)', fontFamily:'Poppins'}}>Find By Specialisation</h1>
        <div>
            <img src={image1} alt = 'Dentistry' height='250px' width='300px'/>
            <img src={image2} alt = 'Primary Care' height='250px' width='300px'/>
            <img src={image3} alt = 'Cardiology' height='250px' width='300px'/>
            <img src={image4} alt = 'MRI Resonance' height='250px' width='300px'/>
        </div>
        { viewAll === true ? 
            <div>
            <img src={image5} alt = 'Blood Test' height='250px' width='300px'/>
            <img src={image6} alt = 'Piscologist' height='250px' width='300px'/>
            <img src={image7} alt = 'Laboratory' height='250px' width='300px'/>
            <img src={image8} alt = 'X-Ray' height='250px' width='300px'/>
        </div> : null
        }
        
        <button onClick={handleViewAll}> {viewAll === true ? 'Collapse' : 'View All'}</button>
    </div>
  )
}

export default FindBySpecialisation;