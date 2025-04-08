import MainSwiper from "../components/MainSwiper";
import BannerSwiper from "../components/BannerSwiper";
import CategoryGrid from "../components/CategoryGrid";
import OffersSwiper from "../components/OffersSwiper";
import AdserviceBanner from "@/components/AdserviceBanner";
import CategorySwiper from "@/components/CategorySwiper";
import DoubleAdBanner from "@/components/DoubleAdBanner";

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
      </div>
    </main>
  );
}
