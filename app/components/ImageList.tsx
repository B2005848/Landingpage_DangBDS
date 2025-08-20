import React from "react";
import { Image } from "@heroui/image";
import "../styles/ImageList.css";

export default function ImageList() {
  const images = [
    {
      src: "/img/1280960/1.webp",
      desc: "Hồ bơi tràn bờ với tầm nhìn toàn cảnh thành phố",
    },
    {
      src: "/img/1280960/2.webp",
      desc: "Khuôn viên xanh mát dành cho gia đình và trẻ nhỏ",
    },
    {
      src: "/img/1280960/3.webp",
      desc: "Phòng gym hiện đại, đầy đủ trang thiết bị",
    },
    { src: "/img/1280960/4.webp", desc: "Sảnh lễ tân sang trọng và đẳng cấp" },
    { src: "/img/1280960/5.webp", desc: "Không gian sinh hoạt chung ấm cúng" },
    {
      src: "/img/1280960/6.webp",
      desc: "Phòng ngủ rộng rãi, nhiều ánh sáng tự nhiên",
    },
    { src: "/img/1280960/7.webp", desc: "Ban công view hồ thoáng đãng" },
    { src: "/img/1280960/8.webp", desc: "Khu BBQ ngoài trời cho gia đình" },
    { src: "/img/1280960/9.webp", desc: "Công viên ven sông dành cho cư dân" },
    // { src: "/img/1280960/10.webp", desc: "Khu trung tâm thương mại tích hợp" },
    {
      src: "/img/1280960/11.webp",
      desc: "Nhà hàng sang trọng bên trong dự án",
    },
    {
      src: "/img/1280960/12.webp",
      desc: "Phòng họp & làm việc chung hiện đại",
    },
    { src: "/img/1280960/13.webp", desc: "Hệ thống an ninh & camera 24/7" },
  ];

  return (
    <section id="img-list" className="mt-[15px] mb-16">
      <h2 className="text-3xl font-bold text-blue-400 mt-[25px] mb-[15px] ml-5">
        DANH SÁCH HÌNH ẢNH
      </h2>

      <div className="grid grid-cols-1 gap-8 px-5 text-center md:grid-cols-4">
        {images.map((item, index) => (
          <div
            key={index}
            data-aos="flip-up"
            data-aos-duration="1000"
            className="flex flex-col items-center "
          >
            <Image
              alt={`Image ${index + 1}`}
              src={item.src}
              className="w-full shadow-lg imageReveal rounded-xl"
            />
            <p className="max-w-xs mt-3 text-sm text-gray-700 md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
