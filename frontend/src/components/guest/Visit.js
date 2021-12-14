import { Component } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../../css/Visit.css";

const Visit = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center pt-5">
                    <h2>Hệ thống cửa hàng</h2>
                </div>
            </div>
            <div class="row pt-5">
                <div className="col-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.301725264612!2d106.6602916153254!3d10.788187061925264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecda427034d%3A0xfc0364341b2923b!2zNzU2IEPDoWNoIE3huqFuZyBUaMOhbmcgVMOhbSwgUGjGsOG7nW5nIDYsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2shk!4v1639122667230!5m2!1svi!2shk"
                        width="100%"
                        height="600"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="col-4" style={{ borderRight: "1px solid #ced4da" }}>
                    <div className="h-100 address">
                        <Link path="#" className="row p-2 mb-4 ">
                            <div className="col-1 text-center">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="col d-grid" style={{ fontFamily: "sans-serif" }}>
                                <b>SGES Tân Bình</b>
                                <span>
                                    FĐịa chỉ: 756 Cách mạng tháng 8, Phường 5, Quận Tân Bình, Thành
                                    phố Hồ Chí Minh
                                </span>
                                <span>SĐT: 0707191381</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;
