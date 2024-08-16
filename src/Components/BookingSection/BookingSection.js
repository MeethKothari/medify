import React, { useState, useEffect } from 'react';
import './BookingSection.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@mui/material/Button';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BookingSection = ({hospitalDetails, onConfirmBooking}) => {
const [storeDates, setStoreDates] = useState([]);
const [selectedTime, setSelectedTime] = useState('');
const [selectedDate, setSelectedDate] = useState('');

useEffect(()=>{
  let todaysDate = new Date();
  let consecutiveThreeDates = []; 
  
  for (let i=0 ; i<7; i++){
    let date = new Date();
    date.setDate(todaysDate.getDate() + i); // getDate will just take an copy of the todaysDate and will not modify the original date
    consecutiveThreeDates.push(date.toLocaleDateString('en-GB'));
  }  
  setStoreDates(consecutiveThreeDates);
},[]) // empty dep arr - this will ensure that the dates are rendered only once to avoid infinite loop

console.log('stored dates: ',storeDates);


const handleButtonValue = (time, date) =>{
  setSelectedTime(time);
  setSelectedDate(date);
  console.log('Date and Time', time, date);
}

const handleConfirmBooking = () => {
  const bookingDetails = {
    time: selectedTime,
    date: selectedDate,
    hospitalName: hospitalDetails['Hospital Name'],
    address: hospitalDetails['Address'],
    city: hospitalDetails['City'],
    state: hospitalDetails['State'],
    zipCode: hospitalDetails['ZIP Code'],
  }

  onConfirmBooking(bookingDetails)
}

const handleDeclineBooking = () => {
  setSelectedTime('')
}

  

return (
  <div className='bookingSectionContainer'>
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    style={{ width: '100%', maxWidth: '600px', height:'220px', padding:'50px'}}
    >
    {storeDates.map((items,index)=>(
      <SwiperSlide key={index}>
      
      
      <h3 style={{textAlign:'center', fontFamily:'Poppins'}}>
      Date: {items}
      { selectedTime.length > 0 ? 
      <>
      <p>Book @ {selectedTime} ?</p> 
      <button style={{margin:'5px', backgroundColor:'green', padding:'5px', color:'white', borderRadius:'8px'}} onClick={handleConfirmBooking}>Confirm</button>
      <button style={{backgroundColor:'red', padding:'5px', color:'white', borderRadius:'8px'}} onClick={handleDeclineBooking}>Decline</button>
      </>: null } 
      </h3>
      <section className='timeSlotsSection'>
      
      
      <h5 style={{marginTop:'10px',display:'flex',alignItems:'center'}}>Morning:
                  <div className='timeSlotsButton'>
                  <Button variant="outlined" value='11:30 AM' onClick={(e)=>handleButtonValue(e.target.value, items)}>11:30 AM</Button>
                  </div></h5>
      <hr style={{marginTop:'10px'}}/>
      
      
      
      <h5 style={{marginTop:'10px',display:'flex',alignItems:'center'}}>After Noon: 
                <div className='timeSlotsButton'>
                <Button variant="outlined" value='12:00 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>12:00 PM</Button>
                <Button variant="outlined" value='12:30 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>12:30 PM</Button>  
                <Button variant="outlined" value='01:30 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>01:30 PM</Button> 
                <Button variant="outlined" value='02:00 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>02:00 PM</Button>
                <Button variant="outlined" value='02:30 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>02:30 PM</Button>
                </div></h5>
      <hr style={{marginTop:'10px'}}/>
      
      
      
      <h5 style={{marginTop:'10px', display:'flex',alignItems:'center'}}>Evening: 
                <div className='timeSlotsButton'>
                <Button variant="outlined" value='06:00 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>06:00 PM</Button>
                <Button variant="outlined" value='06:30 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>06:30 PM</Button>  
                <Button variant="outlined" value='07:00 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>07:00 PM</Button> 
                <Button variant="outlined" value='07:30 PM' onClick={(e)=>handleButtonValue(e.target.value, items)}>07:30 PM</Button>
                </div></h5>
      </section>
      </SwiperSlide>
    ))}
    
    </Swiper>
    </div>
  );
};


export default BookingSection;