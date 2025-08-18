"use client";

import Image from "next/image";
import "../styles/HeroSection.css";
import React from "react";
import { Form, Input, Button } from "@heroui/react";

export default function HeroSection() {
  const [submitted, setSubmitted] = React.useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
  };

  return (
    <section className="bg-white rounded-lg ">
      <div className="flex flex-col items-center justify-between img-container md:flex-row ">
        <div style={{ marginTop: 5 }} className="div1">
          <Image
            src="/hero_image.webp"
            alt="Hero Image"
            width={500}
            height={500}
            priority
            className="w-full h-auto border-t-0 border-b-0 border-l-0 hero-image md:rounded-r-2xl"
          />
        </div>

        {/* form đăng ký */}
        <div className="mt-[15px] p-5 bg-[#D3D3D3] rounded-[14px]">
          <Form
            onSubmit={onSubmit}
            className="w-full shadow bg-[#DCDCDC] p-5 rounded-[14px]"
          >
            <h3 className="flex mb-4 text-2xl font-bold text-center">
              ĐĂNG KÍ NHẬN THÔNG TIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-400 animate__swing animate__animated animate__infinite infinite"
              >
                <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </h3>
            <Input
              style={{ marginLeft: 15 }}
              name="name"
              placeholder="Nhập họ và tên"
              isRequired
              errorMessage="Vui lòng nhập họ và tên của bạn"
              autoComplete="name"
            />
            <Input
              style={{ marginLeft: 15 }}
              name="phone"
              placeholder="Nhập số điện thoại"
              required
              type="tel"
              autoComplete="tel"
              errorMessage="Vui lòng nhập số điện thoại liên lạc của bạn"
              pattern="^[0-9]{10,11}$"
              maxLength={11}
            />
            <Button type="submit" color="primary" className="w-full">
              Gửi ngay cho tôi{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </Button>
            {submitted && (
              <div className="mt-4 text-center text-green-600">
                Đăng ký thành công!
                <br />
                Họ và tên: {submitted.name as string}
                <br />
                Số điện thoại: {submitted.phone as string}
              </div>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}
