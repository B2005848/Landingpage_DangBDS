import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const BeVNPro = Be_Vietnam_Pro({
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

        {/* LINK ANIMATION */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>

      <body className={`${BeVNPro.className} pt-16`}>
        <Header />
        {/* <div className="animate__animated animate__tada animate__infinite infinite">
          Example
        </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
