'use client';

import React from 'react';
import { categoryItems } from '../data/categoryData';
import '../styles/category.scss';

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categoryItems.map((item) => (
        <div key={item.id} className="category-item">
          <img src={item.image} alt={item.label} className="category-image" />
          <span className="category-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
