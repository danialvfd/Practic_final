'use client';

import { bestsellerItems } from '../data/bestsellersData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import '../styles/bestsellers.scss';

const Bestsellers = () => {
  return (
    <div className="bestsellers-container">
      <div className="bestseller-topbar">
        <a href="#" className="bestseller-link">مشاهده همه</a>
        <h2 className="bestseller-title">پرفروش‌ترین کالاها</h2>
      </div>
      <Swiper
        modules={[Grid, Navigation]}
        navigation={true}
        loop={false}
        breakpoints={{
          1024: {
            slidesPerView: 3, 
            spaceBetween: 20, 
          },
          768: {
            slidesPerView: 1, 
          },
        }}
        grid={{ rows: 3, fill: 'row' }}
        className="bestsellers-swiper"
      >
        {bestsellerItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bestseller-card">
              <img
                src={item.image}
                alt={item.title}
                className="bestseller-image"
              />
              <span className="bestseller-rank">{item.id}</span>
              <p className="bestseller-title">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bestsellers;
