import React, {useState} from 'react';
import './HospitalsCard.css';
import BookingSection from '../BookingSection/BookingSection';
import { ReactComponent as HospitalImage } from '../../Assets/hospital-image.svg';
import { ReactComponent as Banner } from '../../Assets/banner-image.svg';

const HospitalsCard = ({selectedStateAndCity}) => {
//console.log(selectedStateAndCity);
const [openBooking, setOpenBooking] = useState(false);

function handleOpenBooking(index){
  if ( openBooking === index ){ //it checks if the card is open then it will set to false and close whenever we click on the button
    setOpenBooking(false);
  }
  else {
    setOpenBooking(index); // if card is closed it sers true and opens the card and passes the idx no 
  }
}
/*The handleConfirmBooking function in HospitalsCard now receives 
the bookingDetails object from BookingSection and can use it to 
update localStorage or perform any other logic.
*/


const handleConfirmBooking = (bookingDetails) => {
  let existingBookingDetails = JSON.parse(localStorage.getItem('bookingDetails')) || [];
  existingBookingDetails.push(bookingDetails);
  localStorage.setItem('bookingDetails', JSON.stringify(existingBookingDetails));
  alert('Booked Successfully - visit My Bookings section to view your booking details');
  console.log('Booking Confirmed', bookingDetails);
}


return (
  <div className='container'>
    { selectedStateAndCity.map((items, index)=>(
    
    <div style={{display:'flex', flexDirection:'column', backgroundColor:'rgba(255, 255, 255, 1)', borderRadius:'15px'}}>
    <div className='hospitalCardContainer' key={index}>
      <HospitalImage/>
      <div className='hospitalCardTextArea'>
        <h3 style={{color:'rgba(20, 190, 240, 1)', marginBottom:'5px'}}>{items['Hospital Name']}</h3>
        <h4 style={{color:'rgba(65, 65, 70, 1)'}}>{items['Address']}</h4>
        <h4 style={{color:'rgba(65, 65, 70, 1)', marginBottom:'5px'}}>{items['City']},{items['State']},{items['ZIP Code']}</h4>
        <h4 style={{color:'rgba(65, 65, 70, 1)'}}> <span style={{color:'rgba(2, 164, 1, 1)'}}>FREE</span>  <strike>₹ 500</strike> Consultation fee at clinic</h4>
      </div>
      <div className='hospitalCardButton'>
        <h4 style={{color:'rgba(2, 164, 1, 1)'}}>Available Today</h4>
        <button onClick={()=>handleOpenBooking(index)}>Book FREE Center visit</button>
      </div>
    </div>
    {openBooking === index ? <BookingSection hospitalDetails={items} onConfirmBooking={handleConfirmBooking}/> : null}
    </div>
    
    ))}
    <div>
    <Banner />
    </div>
</div>
  )
}

export default HospitalsCard;






/* <div>
      <h4>This World Oral Health Day,</h4>
      <h3>Get a FREE Appointment* <br/>
          with Top Dentists.     
      </h3>
      <h4>LIMITED PERIOD OFFER</h4>
      <h4>#BeSensitiveToOralHealth</h4>
      <h6>*T&C Apply - only consultation fee. Procedures / surgeries not covered</h6>
      
    </div> 
    
    
    
    <div className='hospitalCardContainer'>
      <HospitalImage/>
      <div className='hospitalCardTextArea'>
        <h3 style={{color:'rgba(20, 190, 240, 1)', marginBottom:'5px'}}>Fortis Hospital Richmond Road</h3>
        <h4 style={{color:'rgba(65, 65, 70, 1)'}}>Banglore, Karnataka</h4>
        <h4 style={{color:'rgba(65, 65, 70, 1)', marginBottom:'5px'}}>Smilessence Center for Advanced Dentistry + 1</h4>
        <h4 style={{color:'rgba(65, 65, 70, 1)'}}> <span style={{color:'rgba(2, 164, 1, 1)'}}>FREE</span> ₹500 Consultation fee at clinic</h4>
      </div>
      <div className='hospitalCardButton'>
        <h4 style={{color:'rgba(2, 164, 1, 1)'}}>Available Today</h4>
        <button>Book FREE Center visit</button>
      </div>
    </div>
    */