import MainSwiper from "../components/MainSwiper";
import BannerSwiper from "../components/BannerSwiper";
import CategoryGrid from "../components/CategoryGrid";
import OffersSwiper from "../components/OffersSwiper";
import AdserviceBanner from "@/components/AdserviceBanner";
import CategorySwiper from "@/components/CategorySwiper";
import DoubleAdBanner from "@/components/DoubleAdBanner";
import CategoryBox from "@/components/CategoryBox";
import Bestsellers from "@/components/Bestsellers";

export default function Home() {
  return (
    <main>
      <div className="container">
        <MainSwiper />
      </div>
      <BannerSwiper />
      <div className="container">
        <CategoryGrid />
        <OffersSwiper />
        <AdserviceBanner />
        <CategorySwiper />
        <DoubleAdBanner />
        <CategoryBox />
        <Bestsellers />
      </div>
    </main>
  );
}
