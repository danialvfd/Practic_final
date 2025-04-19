export interface CategoryItem {
  id: number;
  image: string;
  label: string;
  slug?: string;
}

export interface DigitalCategoryBox {
  id: number;
  title: string;
  link: string;
  items: CategoryItem[];
}

export const categoryItems: CategoryItem[] = [
  { id: 1, image: "/images/cat-1.png", label: "سوپرمارکت دیجی‌کالا", slug: "supermarkets" },
  { id: 2, image: "/images/cat-2.png", label: "تخفیف موبایل‌کارکرده", slug: "usedMobile" },
  { id: 3, image: "/images/cat-3.png", label: "خرید طلای دیجیتال" },
  { id: 4, image: "/images/cat-4.png", label: "اشتراک پلاس" },
  { id: 5, image: "/images/cat-5.png", label: "خرید طلای فیزیکی" },
  { id: 6, image: "/images/cat-6.png", label: "۴ قسطه" },
  { id: 7, image: "/images/cat-7.png", label: "تخفیف بومی‌محلی" },
  { id: 8, image: "/images/cat-8.png", label: "فروشگاه‌ حضوری" },
  { id: 9, image: "/images/cat-9.png", label: "دیجی‌کالا سرویس" },
  { id: 10, image: "/images/cat-more.png", label: "بیشتر" },
];

export const globalCategoryItems: CategoryItem[] = [
  { id: 1, image: "/images/main-cat-1.jpg", label: "موبایل" },
  { id: 2, image: "/images/main-cat-2.jpg", label: "کالای دیجیتال" },
  { id: 3, image: "/images/main-cat-3.jpg", label: "خانه و آشپزخانه" },
  { id: 4, image: "/images/main-cat-4.jpg", label: "آرایشی بهداشتی" },
  { id: 5, image: "/images/main-cat-5.jpg", label: "خودرو و موتورسیکلت" },
  { id: 6, image: "/images/main-cat-6.jpg", label: "لوازم خانگی برقی" },
  { id: 7, image: "/images/main-cat-1.jpg", label: "موبایل" },
  { id: 8, image: "/images/main-cat-2.jpg", label: "کالای دیجیتال" },
  { id: 9, image: "/images/main-cat-3.jpg", label: "خانه و آشپزخانه" },
  { id: 10, image: "/images/main-cat-4.jpg", label: "آرایشی بهداشتی" },
  { id: 11, image: "/images/main-cat-5.jpg", label: "خودرو و موتورسیکلت" },
  { id: 12, image: "/images/main-cat-6.jpg", label: "لوازم خانگی برقی" },
  { id: 13, image: "/images/main-cat-3.jpg", label: "خانه و آشپزخانه" },
  { id: 14, image: "/images/main-cat-4.jpg", label: "آرایشی بهداشتی" },
  { id: 15, image: "/images/main-cat-5.jpg", label: "خودرو و موتورسیکلت" },
  { id: 16, image: "/images/main-cat-6.jpg", label: "لوازم خانگی برقی" },
  { id: 17, image: "/images/main-cat-6.jpg", label: "لوازم خانگی برقی" },
  { id: 18, image: "/images/main-cat-6.jpg", label: "لوازم خانگی برقی" },
];

export const digitalCategoryBoxData: DigitalCategoryBox[] = [
  {
    id: 1,
    title: "گوشی موبایل",
    link: "#",
    items: [
      { id: 1, image: "/images/phone-1.jpg", label: "سامسونگ" },
      { id: 2, image: "/images/phone-2.jpg", label: "شیائومی" },
      { id: 3, image: "/images/phone-3.jpg", label: "اپل" },
      { id: 4, image: "/images/phone-4.jpg", label: "هوآوی" },
    ],
  },
  {
    id: 2,
    title: "هدفون، هدست و هندزفری",
    link: "#",
    items: [
      { id: 13, image: "/images/acc-1.jpg", label: "پاوربانک" },
      { id: 14, image: "/images/acc-2.jpg", label: "کابل شارژ" },
      { id: 15, image: "/images/acc-3.jpg", label: "شارژر دیواری" },
      { id: 16, image: "/images/acc-4.jpg", label: "هولدر موبایل" },
    ],
  },
  {
    id: 3,
    title: "کیف و کاور گوشی",
    link: "#",
    items: [
      { id: 5, image: "/images/case-1.jpg", label: "ژله‌ای" },
      { id: 6, image: "/images/case-2.jpg", label: "پلاستیکی" },
      { id: 7, image: "/images/case-3.jpg", label: "چرمی" },
      { id: 8, image: "/images/case-4.jpg", label: "فانتزی" },
    ],
  },
  {
    id: 4,
    title: "ساعت هوشمند",
    link: "#",
    items: [
      { id: 9, image: "/images/watch-1.jpg", label: "اپل واچ" },
      { id: 10, image: "/images/watch-2.jpg", label: "شیائومی" },
      { id: 11, image: "/images/watch-3.jpg", label: "سامسونگ" },
      { id: 12, image: "/images/watch-4.jpg", label: "هایلو" },
    ],
  },
];