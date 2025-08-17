"use client";

import Image from "next/image";
import "../styles/HeroSection.css"; // Assuming you have styles for the HeroSection

export default function HeroSection() {
  return (
    <section className="px-8 py-20 bg-white rounded-lg ">
      <div className="parent">
        <div className="div1">
          <Image
            src="/hero_image.webp"
            alt="Hero Image"
            width={1000}
            height={500}
            priority
            className="border-t-0 border-b-0 border-l-0 bordẻ hero-image rounded-r-2xl"
          />
        </div>
        <div className="div2">
          <p className="mb-4 text-2xl ">
            “Không chỉ bán nhà, tôi mang đến cho bạn giải pháp đầu tư thông minh
            & bền vững”
          </p>
        </div>
        <div className="div3">Khám phá</div>
        <div className="div4">1</div>
        <div className="div5">5</div>
        <div className="div6">6</div>
      </div>
    </section>
  );
}
