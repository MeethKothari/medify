import React from 'react';
import './LinksTab.css';
import { ReactComponent as AppLogo } from '../../../Assets/app-logo.svg';
import { ReactComponent as Facebook } from '../../../Assets/facebook-image.svg';
import { ReactComponent as Twitter } from '../../../Assets/twitter-image.svg';
import { ReactComponent as Youtube } from '../../../Assets/youtube-image.svg';
import { ReactComponent as Pinterest } from '../../../Assets/pinterest-image.svg';


const LinksTab = () => {
  return (
    <div style={{ backgroundColor:'rgba(27, 60, 116, 1)',padding:'10px'}}>
      <div style={{margin:'40px'}}>
        <AppLogo/>
      </div>
      <div style={{margin:'30px', display:'flex', justifyContent:'space-around'}}>
      <div>  
        <Facebook style={{marginRight:'10px'}}/>
        <Twitter style={{marginRight:'10px'}}/>
        <Youtube style={{marginRight:'10px'}}/>
        <Pinterest/>
      </div>
      <div className='footerLinks'>
        <h5 style={{marginBottom:'8px'}}>About us</h5>
        <h5 style={{marginBottom:'8px'}}>Our Pricing</h5>
        <h5 style={{marginBottom:'8px'}}>Our Gallery</h5>
        <h5 style={{marginBottom:'8px'}}>Appointment</h5>
        <h5 style={{marginBottom:'8px'}}>Privacy Policy</h5>
      </div>
      </div>
      <hr/>
      <h4 style={{fontFamily:'Poppins', color:'rgba(255, 255, 255, 1)', textAlign:'center', padding:'10px'}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</h4>
    </div>
  )
}

export default LinksTab;