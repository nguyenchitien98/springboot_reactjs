import React from "react";
import "../../css/about.css";
import { Link } from "react-router-dom";
import stories from "../../img/stories.jpg";
import clothing from "../../img/clothing.jpg";
import banner from "../../img/banner.webp";

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-section">
                <section className="d-flex align-items-center section-storis">
                    <div className="col-6 d-flex justify-content-end left-column">
                        <img src={stories} alt="" width="100%" />
                    </div>
                    <div className="col-6 d-grid right-column">
                        <div className="py-3 stories">
                            <h1>Câu chuyện về SGES</h1>
                        </div>
                        <div className="stories-content">
                            <p>
                                Với ý tưởng ấp ủ từ những năm tháng đại học, SGES bắt đầu đi vào thị
                                trường local brand vào giữa năm 2015. Kể từ ngày đầu tiên, đúng với
                                tên gọi của mình Saigonese Clothing - SGES, chúng tôi luôn mong muốn
                                mang đến cho giới trẻ Sài Thành những trải nghiệm tốt nhất về thời
                                trang đường phố, trẻ trung và năng động.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="section-clothing">
                    <div className="d-flex align-items-center clothing-content">
                        <div className="col-6 left-column d-flex justify-content-center align-items-center left-column">
                            <div className="clothing-body text-center">
                                <div className="clothing-title">
                                    <h1>SGES Clothing</h1>
                                </div>
                                <div className="clothing-content">
                                    <p>
                                        Kể từ ngày bắt đầu hoạt động, chúng tôi làm việc không ngừng
                                        nghỉ để mở rộng đa dạng các mẫu mã sản phẩm thời trang chất
                                        lượng nhất, giá cả hợp lý nhất đến tất cả các bạn trên toàn
                                        nước. Bộ sản phẩm của SGES mang phong cách đơn giản, cá
                                        tính, năng động phù hợp cho cả nam và nữ. Hãy đến với SGES
                                        để thời trang mang phong cách riêng của bạn
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 right-column right-column">
                            <img src={clothing} alt="" width="100%" />
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <img src={banner} alt="" width="100%" />
                </div>
                <div className="get-in-touch d-flex justify-content-center">
                    <div className="col-6 d-grid">
                        <h1>Get in touch</h1>
                        <span>756 Cách mạng tháng 8, Phường 5, Quận Tân Bình</span>
                        <span>saigonese.unisex2015@gmail.com</span>
                        <span>0707191381</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
