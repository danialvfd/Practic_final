'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainSwiperData } from '../data/swiperData';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.scss';

const MainSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 9, 
            spaceBetween: 10, 
          },
          768: {
            slidesPerView: 7,  
          },
          425: {
            slidesPerView: 3,  
          },
        }}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {mainSwiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-slide-content">
              <img
                src={item.image}
                alt={item.title}
                className="swiper-slide-image"
              />
              <div className="swiper-slide-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
