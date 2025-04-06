import MainSwiper from "../components/MainSwiper";
import BannerSwiper from "../components/BannerSwiper";
import CategoryGrid from "../components/CategoryGrid";
import OffersSwiper from "../components/OffersSwiper";
import '../styles/global.scss';

export default function Home() {
  return (
    <main>
       <MainSwiper />
       <BannerSwiper />
       <CategoryGrid />
       <OffersSwiper />
    </main>
  );
}
