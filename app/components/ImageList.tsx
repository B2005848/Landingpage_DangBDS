import React from "react";
import { Image } from "@heroui/image";
import "../styles/ImageList.css";
export default function ImageList() {
  const images = Array.from(
    { length: 13 },
    (_, i) => `/img/1280960/${i + 1}.webp`
  );

  return (
    <section className="mt-[15px]">
      <h2 className="text-3xl font-bold text-blue-400 mt-[25px] mb-[5px] ml-5">
        DANH SÁCH HÌNH ẢNH
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 p-5 ">
        {images.map((src, index) => (
          <Image
            data-aos="flip-up"
            data-aos-duration="2000"
            key={index}
            alt={`Image ${index + 1}`}
            src={src}
            className="w-full imageReveal"
          />
        ))}
      </div>
    </section>
  );
}
