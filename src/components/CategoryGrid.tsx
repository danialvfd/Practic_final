'use client';
import Link from 'next/link';
import { categoryItems } from '../data/categoryData';
import '../styles/category.scss';

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categoryItems.map((item) => (
        <Link href={`category/${item.slug}`} key={item.id} className="category-item-link">
          <div className="category-item">
            <img src={item.image} alt={item.label} className="category-image" />
            <span className="category-label">{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
