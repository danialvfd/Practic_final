'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { offersData } from '../data/mockData';
import { Navigation } from 'swiper/modules';
import { numberSeperator } from '../data/numberHelper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.scss';

const OffersSwiper = () => {
  return (
    <div className="offers-swiper-container">
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        loop={false}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {offersData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="offer-item">
              <img src={item.image} alt={item.description} className="offer-image" />
              <div className="offer-details">
                <p className="offer-description">
                  {item.description.length > 30
                    ? item.description.slice(0, 30) + '...'
                    : item.description}
                </p>
                {item.price && item.originalPrice ? (
                  <>
                    <div className="offer-price">
                      <span className="offer-discount">{item.discountPercentage}%</span>
                      <span className="offer-current-price">{numberSeperator(item.price)} تومان</span>
                    </div>
                    <p className="offer-original-price">{numberSeperator(item.originalPrice)} تومان</p>
                  </>
                ) : item.price ? (
                  <div className="offer-price">
                    <span className="offer-current-price">{numberSeperator(item.price)} تومان</span>
                  </div>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OffersSwiper;
