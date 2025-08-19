"use client";
import "../styles/AboutUs.css";
import { Image } from "@heroui/react";
export default function AboutUs() {
  return (
    <section id="AboutUs" style={{ marginTop: "15px" }}>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-4xl font-bold text-blue-400"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            GIỚI THIỆU CHUNG
          </h1>
          <Image src="/gachchanhr.svg" alt="symboys" width={200} />
        </div>

        <div className="text-gray-800 md:text-center md:m-16">
          <p data-aos="fade-up" data-aos-duration="1000" className="paragraph">
            Xin chào! Tôi là <strong> Hải Đăng</strong>, hiện đang công tác tại
            <strong> Cara Group</strong> – đơn vị uy tín trong lĩnh vực{" "}
            <strong> bất động sản</strong>. Với niềm đam mê và kinh nghiệm trong
            nghề, tôi luôn nỗ lực mang đến cho khách hàng những giải pháp bất
            động sản tối ưu, từ tìm kiếm ngôi nhà mơ ước đến các cơ hội đầu tư
            sinh lời bền vững.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="paragraph">
            <strong className="text-blue-500"> Cara Group </strong> mang đến
            dòng sản phẩm căn hộ cao cấp với{" "}
            <strong>
              thiết kế hiện đại - không gian sống tối ưu -{" "}
              <span className="text-red-500"> pháp lý minh bạch</span>
            </strong>
            . Dự án được xây dưng trên quỹ đất{" "}
            <strong>
              3.090 m <sup>2</sup> hứa hẹn trở thành lựa chọn hoàn hảo cho{" "}
              <strong>an cư và đầu tư lâu dài</strong>.
            </strong>
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="paragraph">
            Giá dao động <strong> TỪ 1,7 TỶ/CĂN </strong>(1PN)
          </p>
        </div>
        <hr className="text-gray-500 mt-[15px] mb-[15px]" />
        <h2 className="text-3xl font-bold text-blue-400 mt-[15px] mb-[15px] ml-5 md:text-center">
          CẤU TRÚC VÀ SẢN PHẨM
        </h2>

        <div className="flex flex-row items-center justify-evenly">
          {/*-------------------------------- CỘT 1 */}
          <div className="flex flex-col items-center gap-6 cl-1">
            {/* Diện tích dự án */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image
                data-aos="zoom-in"
                data-aos-duration="1000"
                src="/dientichduan.webp"
                alt=""
                width={100}
              />
              <h3 className="text-2xl text-gray-600">DIỆN TÍCH</h3>
              <h4>
                3.090 m <sup>2</sup>
              </h4>
            </div>

            {/* Số lượng căn hộ */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image
                data-aos="zoom-in"
                data-aos-duration="1000"
                src="/tongcanho.webp"
                alt=""
                width={100}
              />
              <h3 className="text-2xl text-gray-600">TỔNG CĂN HỘ</h3>
              <h4>2 tháp (165 căn hộ/tòa)</h4>
            </div>
          </div>

          {/* ------------------------------------CỘT 2 */}
          <div className="flex flex-col items-center gap-6 cl-2">
            {/* Quy mô */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image
                data-aos="zoom-in"
                data-aos-duration="1000"
                src="/quymo.webp"
                alt=""
                width={100}
              />
              <h3 className="text-2xl text-gray-600">QUY MÔ</h3>
              <h4>2 tòa tháp - 20 tầng</h4>
            </div>

            {/* Diện tích căn hộ */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image
                data-aos="zoom-in"
                data-aos-duration="1000"
                src="/dtcanho.webp"
                alt=""
                width={100}
              />
              <h3 className="text-2xl text-gray-600">DIỆN TÍCH CĂN HỘ</h3>
              <h4>
                từ 39-45 m <sup>2</sup>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
