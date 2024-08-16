import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './MyBookings.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';
import {ReactComponent as Banner } from '../../Assets/banner-image.svg';
import {ReactComponent as HospitalImage } from '../../Assets/hospital-image.svg';

const MyBookings = () => {
const [searchTerm, setSearchTerm] = useState('');
const [unFilteredData, setUnFilteredData] = useState([]); // this will only keep original data for ref to filter it later on
const [filteredData, setFilteredData] = useState([]);

useEffect(()=>{
  let bookingsData = JSON.parse(localStorage.getItem('bookingDetails')) || [];
  setUnFilteredData(bookingsData); // to store original data as reference for filter purpose 
  setFilteredData(bookingsData); // to display accordingly 
},[])


useEffect(()=>{
 // show filtered data basedon user search
 // For each booking, the code checks whether the 
 // hospitalName property (converted to lowercase) includes the searchTerm (also converted to lowercase).

 const filter = unFilteredData.filter( booking => 
  booking.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()));
  setFilteredData(filter);
},[searchTerm,unFilteredData]);
  
  return (
    <>
    <Header/>
    <div style={{backgroundColor:'rgb(232, 240, 245)'}}>
    <div className='extendedHeader'>
    <h1 style={{color:'white', marginLeft:'30px'}}>My Bookings</h1>
    <input type='text' placeholder='Search by Hospital' value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value)}}/>
    </div>
    
    <div style={{display:'flex', flexDirection:'column',alignItems:'center', gap:'5px', flexWrap:'wrap'}}>
    { filteredData ? (filteredData.map((bookings, index) => (
      <div className='hospitalCardContainer' key={index}>
        <div>
          <HospitalImage/>
        </div>
        <div>
          <h4 style={{color:'rgba(20, 190, 240, 1)', marginBottom:'5px'}}>{bookings.hospitalName}</h4>
          <h5 style={{color:'rgba(65, 65, 70, 1)'}}>{bookings.address}</h5>
          <h5 style={{color:'rgba(65, 65, 70, 1)', marginBottom:'5px'}}>{bookings.city},{bookings.state},{bookings.zipCode}</h5>
        </div>
        <div>
          <Button variant="outlined" sx={{padding:'5px'}}>{bookings.time}</Button>
          <Button variant="outlined" sx={{borderColor:'green', color:'green', marginLeft:'5px', padding:'5px'}}>{bookings.date}</Button>
        </div>
      
    </div>
    ))) : ( <h1 style={{color:'rgba(20, 190, 240, 1)', fontFamily:'Poppins', marginBottom:'20px'}}>
        No Bookings as of now <Link to='/findDoctors'><span style={{color:'green',cursor:'pointer',}}>click here</span> </Link>to book your slot !!!</h1> )} 
    <Banner />
    </div>

    <div style={{marginTop:'20px'}}>
    <Footer />
    </div>
    </div>
    
    
    </>
  )
}

export default MyBookings;