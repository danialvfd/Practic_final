import Header from "@/components/Header"; // ایمپورت کامپوننت هدر
import "../styles/global.scss";  // استایل‌های SCSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
