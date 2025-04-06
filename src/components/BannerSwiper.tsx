'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerSwiperData } from '../data/swiperData';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.scss';

const BannerSwiper = () => {
    return (
        <div className="banner-swiper">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {bannerSwiperData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="banner-slide">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="banner-slide-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSwiper;
