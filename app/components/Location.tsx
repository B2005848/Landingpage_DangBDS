"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Location() {
  // Tạo 100 ảnh giả sử trong /public/img/1.webp -> /img/100.webp
  const images = Array.from({ length: 4 }, (_, i) => `/img/${i + 1}.webp`);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Tự động đổi ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // đổi mỗi 4 giây
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="location">
      <div
        style={{
          marginTop: "15px",
        }}
      >
        <div className="flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="w-full h-auto hero-image rounded-2xl md:rounded-r-2xl"
              width={500}
              height={500}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-col mt-[25px] ml-[5px]">
          <h2 className="text-3xl font-bold text-blue-400 mt-[15px] mb-[5px] ml-5">
            VỊ TRÍ & KẾT NỐI VÙNG
          </h2>
          <p className="mt-[15px] mb-[15px] ml-5 text-gray-800 ">
            Nằm tại Khu đô thị{" "}
            <strong className="text-blue-400 ">
              <a
                href="https://maps.app.goo.gl/owWjXXcQZvswLFQz7"
                target="_blank"
              >
                Nam Cần Thơ
              </a>
            </strong>
            , phường Hưng Thạnh, quận Cái Răng, ngay mặt tiền đường Võ Nguyên
            Giáp, tiếp cận thuận tiện đến các khu vực lân cận như{" "}
            <strong> Hậu Giang, Sóc Trăng, TP HCM (2h)</strong>, sân bay Trà
            Nóc, trung tâm thương mại, bệnh viện, trường học, bến xe…
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.7454919735957!2d105.78755234410518!3d10.011907026883774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a06353121c815b%3A0xfcbc32ef2ef648c0!2zQ8SDbiBo4buZIGNhbyBj4bqlcCBDYXJhIFJpdmVyIFBhcms!5e1!3m2!1svi!2s!4v1755528748812!5m2!1svi!2s"
            className="border-0 w-full h-[300px] md:h-[450px] rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
