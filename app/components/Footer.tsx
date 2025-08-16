export default function Footer() {
  return (
    <footer className="py-10 text-white bg-green-900">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Cột 1 - Logo + giới thiệu */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            BĐS Cao Cấp
          </h2>
          <p>
            Chúng tôi cung cấp các dự án bất động sản cao cấp với vị trí đắc địa
            và tiềm năng sinh lời vượt trội.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Liên kết</h3>
          <ul>
            <li>
              <a href="#features" className="hover:text-yellow-400">
                Điểm nổi bật
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-400">
                Hình ảnh
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow-400">
                Bảng giá
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Liên hệ */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Liên hệ</h3>
          <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
          <p>📞 0909 123 456</p>
          <p>✉ contact@bdscaocap.vn</p>
        </div>
      </div>

      <div className="pt-4 mt-8 text-center border-t border-green-700">
        <a
          href="https://www.facebook.com/profile.php?id=61579148129574#"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2025 SOYVN - Web Design & Digital Branding. All rights
          reserved.
        </a>
      </div>
    </footer>
  );
}
