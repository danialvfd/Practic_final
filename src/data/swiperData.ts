export interface SwiperItem {
  id: number;
  image?: string;
  description?: string;
  title?: string;
  link?: string;
}

export const mainSwiperData: SwiperItem[] = [
  {
    id: 1,
    image: "/images/slider-image-1.jpg",
    description: "چی شد؟",
  },
  {
    id: 2,
    image: "/images/slider-image-2.jpg",
    description: "ارزونش موجود شد",
  },
  {
    id: 3,
    image: "/images/slider-image-3.jpg",
    description: "چراغ خواب خاص",
  },
  {
    id: 4,
    image: "/images/slider-image-4.jpg",
    description: "پیچر دماسنج دار!",
  },
  {
    id: 5,
    image: "/images/slider-image-5.jpg",
    description: "برد گیم های ژاپنی",
  },
  {
    id: 6,
    image: "/images/slider-image-1.jpg",
    description: "چی شد؟",
  },
  {
    id: 7,
    image: "/images/slider-image-2.jpg",
    description: "ارزونش موجود شد",
  },
  {
    id: 8,
    image: "/images/slider-image-3.jpg",
    description: "چراغ خواب خاص",
  },
  {
    id: 9,
    image: "/images/slider-image-4.jpg",
    description: "پیچر دماسنج دار!",
  },
  {
    id: 10,
    image: "/images/slider-image-5.jpg",
    description: "برد گیم های ژاپنی",
  },
];


export const bannerSwiperData: SwiperItem[] = [
  {
    id: 1,
    image: "/images/banner-image-1.gif",
    title: "بنر 1",
  },
  {
    id: 2,
    image: "/images/banner-image-2.jpg",
    title: "بنر 2",
  },
  {
    id: 3,
    image: "/images/banner-image-3.jpg",
    title: "بنر 3",
  },
];
