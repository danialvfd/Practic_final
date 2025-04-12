'use client';

import { digitalCategoryBoxData } from "../data/categoryData";
import "swiper/css";
import "../styles/digitalCategoryBox.scss";

const CategoryBox = () => {
    return (
        <div className="digital-category-box-container">
            {digitalCategoryBoxData.map((box) => (
                <div key={box.id} className="digital-category-box">
                    <h3 className="digital-category-box-title">{box.title}</h3>
                    <p className="digital-category-box-subtitle">بر اساس سلیقه شما</p>
                    <div className="digital-category-images-container">
                        <div className="digital-category-image">
                            <img src={box.items[0].image} alt={box.items[0].label} />
                        </div>
                        <div className="digital-category-image">
                            <img src={box.items[1].image} alt={box.items[1].label} />
                        </div>
                        <div className="digital-category-image">
                            <img src={box.items[2].image} alt={box.items[2].label} />
                        </div>
                        <div className="digital-category-image">
                            <img src={box.items[3].image} alt={box.items[3].label} />
                        </div>
                    </div>
                    <div className="digital-category-link-wrapper">
                        <a href="#" className="digital-category-link">بیشتر</a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CategoryBox;
