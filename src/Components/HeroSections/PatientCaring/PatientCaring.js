import React from 'react';
import './PatientCaring.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png'; 

const PatientCaring = () => {
  return (
    <div className='container'>
       <div>
        <img src={image1} alt='patient' style={{margin:'20px'}}/>
        <img src={image2} alt='facilities' style={{margin:'20px'}}/>
      </div>
    </div>
  )
}

export default PatientCaring;