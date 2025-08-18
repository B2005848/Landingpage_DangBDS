import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="py-12 text-gray-200 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-t-2xl">
      <div className="grid max-w-6xl gap-12 px-6 mx-auto md:grid-cols-3">
        {/* Cột 1 - Logo + giới thiệu */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-green-300">
            BĐS Cao Cấp
          </h2>
          <p className="leading-relaxed text-gray-300">
            Chúng tôi cung cấp các dự án bất động sản cao cấp với vị trí đắc địa
            và tiềm năng sinh lời vượt trội.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-yellow-300">
            Liên kết
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#gallery"
                className="transition-colors duration-200 hover:text-green-400"
              >
                Hình ảnh
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="transition-colors duration-200 hover:text-green-400"
              >
                Bảng giá
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578326949869"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-green-400"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Liên hệ */}
        <div className="space-y-2">
          <h3 className="mb-4 text-lg font-semibold text-yellow-300">
            Liên hệ
          </h3>
          <p>
            <span className="font-semibold text-green-300">Địa chỉ: </span>
            Ninh Kiều, Cần Thơ, Việt Nam
          </p>
          <p>
            <span className="font-semibold text-green-300">Điện thoại: </span>
            (039) 944 9731
          </p>
          <p>
            <span className="font-semibold text-green-300">Email: </span>
            haidanggiangthanh@gmail.com
          </p>
        </div>
      </div>

      <div className="pt-6 mt-10 text-sm text-center text-gray-400 border-t border-gray-600">
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
