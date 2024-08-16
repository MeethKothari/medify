import React from 'react';
import offerImage1 from "./assets/offer1.png";
import offerImage2 from "./assets/offer2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Offers = () => {
  return (
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
      style={{ width: '900px', height: '300px', marginTop:'40px', marginBottom:'70px' }}
    >
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={offerImage1} alt="Offer 1" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={offerImage2} alt="Offer 2" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={offerImage1} alt="Offer 1" style={{ width: '100%' }} />
      </SwiperSlide>
      <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={offerImage2} alt="Offer 2" style={{ width: '100%' }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Offers;
