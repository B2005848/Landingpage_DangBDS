import Header from "./components/Header";
import Footer from "./components/Footer";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";

const montserrats = Montserrat({
  subsets: ["latin"], // bộ ký tự
  weight: ["400", "500", "700"], // độ đậm
});

export const metadata = {
  title: "Đăng CARA - Dự án bất động sản cao cấp",
  description: "Dự án bất động sản cao cấp với vị trí đắc địa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrats.className} pt-16`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
