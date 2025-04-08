'use client';

import { adBannerData } from '../data/mockData';
import '../styles/adserviceBanner.scss';

const AdserviceBanner = () => {
  return (
    <div className="ad-banner-wrapper">
      {adBannerData.map((item) => (
        <a href={item.link} key={item.id} className="ad-banner-item">
          <img src={item.image} alt={`ad-${item.id}`} />
        </a>
      ))}
    </div>
  );
};

export default AdserviceBanner;
