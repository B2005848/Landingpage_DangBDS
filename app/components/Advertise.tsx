"use client";
export default function Advertise() {
  const text =
    "📊 Giá trị bền vững 🏠 Tìm nhà mơ ước – Đầu tư thông minh – Giá trị bền vững cùng ĐĂNG CARA! 🏡 Nhà đẹp – Giá tốt 💎 Uy tín tạo niềm tin 📈 Đầu tư sinh lợi nhuận 🔑 Chìa khóa thành công";

  return (
    <div
      style={{
        paddingBlock: "8px",
      }}
      className="py-2 overflow-hidden text-sm text-white bg-blue-500 whitespace-nowrap"
    >
      <div className="marquee">
        <span>{text}</span>
        <span>{text}</span>
      </div>

      <style jsx>{`
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        .marquee span {
          display: inline-block;
          padding-right: 2rem; /* khoảng cách giữa các lần lặp */
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
