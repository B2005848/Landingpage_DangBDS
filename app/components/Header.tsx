"use client";

import { useState } from "react";

export default function Header() {
  const menuItems = [
    { label: "Trang chủ", href: "#" },
    { label: "Điểm nổi bật", href: "#features" },
    { label: "Hình ảnh", href: "#gallery" },
    { label: "Bảng giá", href: "#pricing" },
    {
      label: "Liên hệ",
      href: "https://www.facebook.com/profile.php?id=61578326949869",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="flex items-center justify-between bg-gray-200 shadow-md md:justify-between"
      style={{ padding: "10px 20px" }}
    >
      {/* Mobile screen */}
      <div
        className="flex items-end justify-start w-full px-4 md:hidden"
        style={{ marginLeft: "10px" }}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* Icon for the menu button */}
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/menu--v7.png"
            alt="menu--v7"
          />
        </button>

        {/* Dropdown menu mobile screen*/}
        <div
          id="menu"
          className={`absolute top-0 left-0 w-64 h-full bg-gray-300 shadow-lg flex flex-col items-start rounded-sm p-4 z-50  md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            style={{ margin: "10px" }}
            className="self-end"
            onClick={() => setIsOpen(false)} // đóng menu khi click vào nút đóng
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {menuItems.map((item) => (
            <a
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              key={item.label}
              href={item.href}
              className="text-gray-700 transition-colors hover:text-blue-500"
              onClick={() => setIsOpen(false)} // đóng menu sau khi click
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* logo  */}
      <div
        className="flex items-center justify-end w-full px-4 md:w-auto"
        style={{ marginLeft: "10px" }}
      >
        <a href="#">
          <img
            src="/logonotexto.svg"
            alt="Hải Đăng Cara Logo"
            width={50}
            height={50}
          />
        </a>
        <span
          style={{ marginLeft: 15, marginRight: 10 }}
          className="ml-5 text-gray-800"
        >
          <p>
            <strong>HẢI ĐĂNG </strong>
            <br />
            <span className="text-sm text-gray-600">Bất động sản </span>
          </p>
        </span>
      </div>

      {/* Desktop screen */}
      <nav className="items-center justify-end hidden space-x-4 md:flex">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target}
            rel={item.rel}
            className="text-gray-900 transition-all duration-300 hover:text-blue-500 :hover:transform hover:scale-105 trnasition-transform"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
