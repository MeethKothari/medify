import React from 'react';
//import HeroSection from '../HeroSection/HeroSection';
import './Header.css';
import { ReactComponent as Applogo } from '../../Assets/app-logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
<>
  <div className='navbar-container'>
  <div className='heading'>
    <h4> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h4>
  </div>
  <div className='navbar'>
    <Link to ='/'><Applogo/></Link>
    <Link to ='/findDoctors'><h5>Find Doctors</h5></Link>
    <Link to ='/hospitals'><h5>Hospitals</h5></Link>
    <Link to ='/medicines'><h5>Medicines</h5></Link>
    <Link to ='/surgeries'><h5>Surgeries</h5></Link>
    <Link to ='/softwareForProvider'><h5>Software for Provider</h5></Link>
    <Link to ='/facilities'><h5>Facilities</h5></Link>
    <Link to='/myBookings'><button>My Bookings</button></Link>
  </div> 
  </div>
  {/* <HeroSection/> */}
</>
  );
}

export default Header;