import { Component } from "react";

class NavBot extends Component {
    render() {
        return (
            <div className="mt-5 pt-3" style={{ backgroundColor: '#E4E4E4' }}>
                <div className="row m-4" style={{ color: '#9D9D9D' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <h4>S G E S</h4>
                    </div>
                    <div className="col">
                        <h6>CUSTOMER CARE</h6>
                        <p>
                            Shipping Policy &gt;
              <br />
              Returns Policy &gt;
              <br />
              Contact Us &gt;
              <br />
              About Us &gt;
            </p>
                    </div>
                    <div className="col">
                        <h6>VIST OUR STORE</h6>
                        <p>
                            <i className="bi bi-geo-alt-fill" />
              44/64 Tran Thai Tong
              <br />
              Cau Giay, Ha Noi
            </p>
                    </div>
                    <div className="col">
                        <h6>STAY CONNECTED</h6>
                        <i className="bi bi-facebook pe-2" />
                        <i className="bi bi-instagram pe-2" />
                        <i className="bi bi-twitter pe-2" />
                        <i className="bi bi-github pe-2" />
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="bg-dark p-3 text-center">
                    <span style={{ color: '#E4E4E4' }}>© 2021 by fpt student</span>
                </div>
            </div>
        );
    }
}

export default NavBot