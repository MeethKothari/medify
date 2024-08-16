import React from 'react';
import doctor1 from './assets/doctor1.png';
import doctor2 from './assets/doctor2.png';
import doctor3 from './assets/doctor3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const MedicalSpecialists = () => {
  return (
    <div style={{textAlign:'center', color:'rgba(27, 60, 116, 1)', marginTop:'30px', fontFamily:'Poppins'}}>
        <h1>Our Medical Specialist</h1>
        <Swiper
      modules={[Scrollbar, Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      style={{ width: '900px', height: '500px', marginTop:'40px', marginBottom:'70px' }}
    >
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={doctor1} alt="Offer 1" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={doctor2} alt="Offer 2" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={doctor3} alt="Offer 1" style={{ width: '100%' }} />
      </SwiperSlide>

    </Swiper>
    </div>
  )
}

export default MedicalSpecialists