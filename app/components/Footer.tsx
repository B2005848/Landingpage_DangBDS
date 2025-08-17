import "../styles/Footer.css"; // Assuming you have styles for the Footer

export default function Footer() {
  return (
    <footer className="py-10 text-gray-700 bg-gradient-to-b from-5% to-100% to-gray-500">
      <div className="grid gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Cột 1 - Logo + giới thiệu */}
        <div>
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ color: "#A2AF9B", marginTop: "10px" }}
          >
            BĐS Cao Cấp
          </h2>
          <p style={{ color: "#A2AF9B" }}>
            Chúng tôi cung cấp các dự án bất động sản cao cấp với vị trí đắc địa
            và tiềm năng sinh lời vượt trội.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh */}
        <div>
          <h3 className="mb-4 text-xl font-semibold animate__slow 1.5s animate__animated animate__bounce animate__infinite infinite">
            Liên kết
          </h3>
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
        <div style={{ lineHeight: "1.6" }}>
          <h3 className="mb-4 text-lg font-semibold text-gray-50">Liên hệ</h3>
          <p className="text-gray-50">
            <strong>Địa chỉ: </strong>
            Ninh Kiều, Cần Thơ, Việt Nam
          </p>
          <p className="text-gray-50">
            <strong>Điện thoại:</strong> (039) 944 9731
          </p>
          <p className="text-gray-50">
            <strong>Email: </strong> haidanggiangthanh@gmail.com
          </p>
        </div>
      </div>

      <div
        className="text-sm text-center border-t border-gray-200"
        style={{ marginTop: "20px", paddingTop: "10px" }}
      >
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
