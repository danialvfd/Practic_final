'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerSwiperData } from '../data/mockData';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // به طور پیش‌فرض Swiper باید این رو ایمپورت کند
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.scss'; // ایمپورت فایل SCSS مخصوص Swiper

const BannerSwiper = () => {
    return (
        <div className="banner-swiper">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
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
