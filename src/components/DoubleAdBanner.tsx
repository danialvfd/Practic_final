'use client';

import { adBannerData2x1 } from '../data/mockData';
import '../styles/adserviceBanner.scss';

const DoubleAdBanner = () => {
  return (
    <div className="ad-banner2x1-wrapper">
      {adBannerData2x1.map((item) => (
        <a href={item.link} key={item.id} className="ad-banner2x1-item">
          <img src={item.image} alt={`ad-${item.id}`} />
        </a>
      ))}
    </div>
  );
};

export default DoubleAdBanner;