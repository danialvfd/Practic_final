'use client';
import { globalCategoryItems } from "../data/categoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/grid";
import "../styles/swiper.scss";

const CategorySwiper = () => {
    return (
        <div className="main-category-swiper-container">
            <h2>خرید بر اساس دسته‌بندی</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                grid={{
                    rows: 2,
                    fill: "row"
                }}
                modules={[Grid, Navigation]}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="main-category-swiper"
            >
                {globalCategoryItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="main-category-item">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="main-category-image"
                                width={100}
                                height={100}
                            />
                            <p className="main-category-title">{item.label}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategorySwiper;
