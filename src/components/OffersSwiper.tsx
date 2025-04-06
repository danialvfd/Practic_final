'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offersData } from '../data/mockData';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.scss';

const OffersSwiper = () => {
  return (
    <div className="offers-swiper-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {offersData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="offer-item">
              <img src={item.image} alt={item.description} className="offer-image" />
              <div className="offer-details">
              <p className="offer-description">
                  {item.description.length > 40
                    ? item.description.slice(0, 40) + '...'
                    : item.description}
                </p>
                <div className="offer-price">
                  <span className="offer-discount">{item.discountPercentage}%</span>
                  <span className="offer-current-price">{item.price} تومان</span>
                </div>
                <p className="offer-original-price">{item.originalPrice} تومان</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersSwiper;
