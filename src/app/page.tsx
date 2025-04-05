// src/app/page.tsx
import MainSwiper from "../components/MainSwiper"; // ایمپورت کامپوننت
import BannerSwiper from "../components/BannerSwiper";

export default function Home() {
  return (
    <main>
       <MainSwiper />
       <BannerSwiper />
      {/* سایر محتوای صفحه */}
    </main>
  );
}
