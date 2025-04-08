import Header from "@/components/Header";
import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}