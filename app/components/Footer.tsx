import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="py-12 text-gray-800 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-2xl">
      <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-3">
        {/* Cột 1 - Logo + giới thiệu */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-blue-500">
            HẢI ĐĂNG - CARA GROUP
          </h2>
          <p className="leading-relaxed text-gray-800">
            Chuyên viên tư vấn bất động sản cao cấp, tôi cung cấp các dự án bất
            động sản cao cấp với vị trí đắc địa và tiềm năng sinh lời vượt trội.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-blue-500">Liên kết</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#gallery"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Hình ảnh
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Bảng giá
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578326949869"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Liên hệ */}
        <div className="space-y-2">
          <h3 className="mb-4 text-lg font-semibold text-blue-500">Liên hệ</h3>
          <p>
            <span className="font-semibold text-blue-500">Địa chỉ: </span>
            Ninh Kiều, Cần Thơ, Việt Nam
          </p>
          <p>
            <span className="font-semibold text-blue-500">Điện thoại: </span>
            (039) 944 9731
          </p>
          <p>
            <span className="font-semibold text-blue-500">Email: </span>
            haidanggiangthanh@gmail.com
          </p>
        </div>
      </div>

      <div className="pt-6 mt-10 text-sm text-center text-gray-800 border-t border-gray-600">
        <a
          href="https://www.facebook.com/profile.php?id=61579148129574#"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-green-300"
        >
          © 2025 SOYVN - Web Design & Digital Branding. All rights reserved.
        </a>
      </div>
    </footer>
  );
}
