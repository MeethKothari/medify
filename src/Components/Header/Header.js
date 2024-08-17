import React from 'react';
//import HeroSection from '../HeroSection/HeroSection';
import './Header.css';
import { ReactComponent as Applogo } from '../../Assets/app-logo.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
<>
  <div className='navbar-container'>
  <div className='heading'>
    <h4> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</h4>
  </div>
  <div className='navbar'>
  
{/* we can use Link and NavLink both but if we use Link then we have to use useLocation for manually adding an underline 
where as NavLink have an in built functionality   */}

    <NavLink to ='/' ><Applogo/></NavLink>
    <NavLink to ='/findDoctors' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Find Doctors</h5></NavLink>
    <NavLink to ='/hospitals' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Hospitals</h5></NavLink>
    <NavLink to ='/medicines' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Medicines</h5></NavLink>
    <NavLink to ='/surgeries' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Surgeries</h5></NavLink>
    <NavLink to ='/softwareForProvider' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Software for Provider</h5></NavLink>
    <NavLink to ='/facilities' className={({isActive}) => (isActive ? 'activeLink' : '')}><h5>Facilities</h5></NavLink>
    <NavLink to='/myBookings' className={({isActive}) => (isActive ? 'activeLink' : '')}><button>My Bookings</button></NavLink>
  </div> 
  </div>
</>
  );
}

export default Header;