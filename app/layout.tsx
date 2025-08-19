import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import { Providers } from "./providers";
import { AOSProvider } from "./aos-provider"; // 👈 import

const BeVNPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="shortcut icon" href="Logonotext.svg" type="image/x-icon" />
      </head>

      <body className={`${BeVNPro.className} pt-16`}>
        <Providers>
          <Header />
          <AOSProvider /> {/* 👈 Khởi tạo AOS ở đây */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
