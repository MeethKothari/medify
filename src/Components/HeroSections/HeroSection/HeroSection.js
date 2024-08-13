import React from 'react';
import { ReactComponent as HeroImage} from '../../../Assets/hero-image.svg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-section-container'>
      <div className='hero-section-description'>
        <h3 style={{fontSize:'20px'}}>Skip the travel! Find Online</h3>
        <h1 style={{fontSize:'40px'}}>Medical <span style={{color:'rgba(42, 167, 255, 1)'}}>Centers</span></h1>
        <h4 style={{fontSize:'20px', color:'rgba(92, 97, 105, 1)'}}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</h4>
        <button className='hero-section-button'>Find Centers</button>
      </div>
      <div className='hero-section-image'>
         <HeroImage/>
      </div>
      
    </div>
  )
}


export default HeroSection;