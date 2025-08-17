"use client";

import { useState } from "react";

export default function Header() {
  const menuItems = [
    {
      label: "Trang chủ",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      label: "Điểm nổi bật",
      href: "#features",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
    },
    {
      label: "Hình ảnh",
      href: "#gallery",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    },
    {
      label: "Bảng giá",
      href: "#pricing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
      ),
    },
    {
      label: "Fanpage",
      href: "https://www.facebook.com/profile.php?id=61578326949869",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      ),
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
                marginTop: "10px",
                marginBottom: "10px",
                padding: "5px 0px 5px 0px",
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.label}
              href={item.href}
              target={item.target}
              className="w-full text-gray-700 transition-colors border-b border-gray-500 hover:text-blue-500"
              onClick={() => setIsOpen(false)} // đóng menu sau khi click
            >
              {item.icon}
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
