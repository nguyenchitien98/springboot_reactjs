import { Component } from "react";
import '../../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row m-0" style={{ backgroundColor: '#F5F3F2' }}>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col p-0 ps-2">
                                    <img src="https://media3.scdn.vn/img4/2021/01_08/HZLkEkEd24irMlzQ1aUV.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col p-0 pe-2">
                                    <div className="w-100 h-100" style={{ backgroundColor: '#FFE9E3', paddingTop: '33%' }}>
                                        <h3 className="text-center">SULTRY &amp; SMART</h3>
                                        <p className="text-center">HOT SPRING LOOKS</p>
                                        <h3 className="text-center">Shop women</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2" />
                    </div>
                    <div className="row m-0" style={{ backgroundColor: '#D4E4E0' }}>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col p-0 ps-2">
                                    <div className="w-100 h-100" style={{ backgroundColor: '#A3C7BD', paddingTop: '33%', color: 'white' }}>
                                        <h3 className="text-center">ELEGANT &amp; SLICK</h3>
                                        <p className="text-center">GET READY FOR SUMMER</p>
                                        <h3 className="text-center">Shop men</h3>
                                    </div>
                                </div>
                                <div className="col p-0 pe-2">
                                    <img src="https://cf.shopee.vn/file/7505f513809bd9e0fb59aebfcc6b5eb7" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2" />
                    </div>
                </div>
                <div>
                    <div className="p-4">
                        <h3 className="text-center">Sản phẩm mới</h3>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <div className="row text-center">
                                <div className="col-md-4 ps-2 pe-2">
                                    <img src="https://static.wixstatic.com/media/84770f_92ad288f7eb849c68652826216de56dc.png/v1/fill/w_394,h_518,al_c,q_90,usm_0.66_1.00_0.01/84770f_92ad288f7eb849c68652826216de56dc.webp" className="img-fluid" alt="" />
                                    <div className="text-center p-4" style={{ backgroundColor: '#DADAD7' }}>
                                        <h5 className="fts-normal">DENIM</h5>
                                        <span>$ 45.00</span>
                                    </div>
                                </div>
                                <div className="col-md-4 ps-2 pe-2">
                                    <img src="https://static.wixstatic.com/media/84770f_fa2cb753b49b43faa1e9b3da2e8f72c0.png/v1/fill/w_396,h_518,al_c,q_90,usm_0.66_1.00_0.01/84770f_fa2cb753b49b43faa1e9b3da2e8f72c0.webp" className="img-fluid" alt="" />
                                    <div className="text-center p-4" style={{ backgroundColor: '#DADAD7' }}>
                                        <h5 className="fts-normal">DENIM</h5>
                                        <span>$ 45.00</span>
                                    </div>
                                </div>
                                <div className="col-md-4 ps-2 pe-2">
                                    <img src="https://static.wixstatic.com/media/84770f_8745e3f04d8e4662ba23b4d575602616.png/v1/fill/w_399,h_518,al_c,q_90,usm_0.66_1.00_0.01/84770f_8745e3f04d8e4662ba23b4d575602616.webp" className="img-fluid" alt="" />
                                    <div className="text-center p-4" style={{ backgroundColor: '#DADAD7' }}>
                                        <h5 className="fts-normal">DENIM</h5>
                                        <span>$ 45.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" />
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <h1>ĐĂNG KÝ NHẬN THÔNG BÁO</h1>
                    <h5>Nhận thông báo từ SGES.</h5>
                    <div className="row m-4">
                        <div className="col-md-4" />
                        <div className="col-md-4 ps-5 pe-5">
                            <form>
                                <input type="email" className="form-control border border-3 rounded-0" placeholder="Nhập địa chỉ email" />
                                <button className="mt-3 p-0 pt-2 btn w-100 rounded-0" style={{ backgroundColor: '#A3C7BD' }}>
                                    <h5 style={{ color: 'white' }}>Đăng ký ngay</h5>
                                </button>
                            </form>
                        </div>
                        <div className="col-md-4" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;