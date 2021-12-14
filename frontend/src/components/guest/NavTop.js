import { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { FaUserCircle } from "react-icons/fa";
import ProfileService from "../../services/guestservice/ProfileService";
import { connect } from "react-redux";
import * as action from "../../actions";

class NavTop extends Component {
    logout = () => {
        ProfileService.logout();
        this.props.setAuth(null);
    };

    render() {
        return (
            <div>
                <div className="p-2" style={{ backgroundColor: "#E3E3E3" }}>
                    <div className="row m-0">
                        <div className="col-6"></div>
                        <div className="col-6 text-center d-flex justify-content-center align-items-center">
                            {this.props.auth &&
                            (this.props.isStaff(this.props.auth.roles) ||
                                this.props.isStaff(this.props.auth.roles)) ? (
                                <Link to="/staff">
                                    <div className="btn">Quản lý cửa hàng</div>
                                </Link>
                            ) : null}
                            {this.props.auth ? (
                                <div className="dropdown px-3">
                                    <Link
                                        className="text-dark dropdown-toggle d-flex align-items-center text-decoration-none"
                                        to="#"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className="btn px-0">
                                            <FaUserCircle />
                                            <span style={{ paddingLeft: "10px" }}>
                                                {this.props.auth.username || "username"}
                                            </span>
                                        </div>
                                    </Link>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/sges/myprofile">
                                                Tài khoản của tôi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/sges/myorder">
                                                Đơn mua
                                            </Link>
                                        </li>
                                        <li>
                                            <dir className="dropdown-divider"></dir>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item text-danger"
                                                to="#"
                                                onClick={this.logout}
                                            >
                                                Đăng xuất
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/sges/login">
                                    <div className="btn">
                                        <FaUserCircle />
                                        <span className="ms-2">Đăng nhập</span>
                                    </div>
                                </Link>
                            )}
                            <span>|</span>
                            <Link
                                style={{ textDecoration: "none" }}
                                className="text-dark"
                                to="/sges/cart"
                            >
                                <span className="ms-2">
                                    <i className="bi bi-cart"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{ margin: "0 auto" }}>
                            <li className="nav-item">
                                <Link className="nav-link h5 active mb-0 ms-4 me-4" to="/sges">
                                    S G E S
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-4 me-4" to="/sges" style={{}}>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-4 me-4" to="/sges/collection">
                                    Bộ sưu tập
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link ms-4 me-4" to='/sges/store'>LOOKBOOK</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link ms-4 me-4" to="/sges/aboutus">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-4 me-4" to="/sges/visit">
                                    Địa chỉ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (auth) => {
            dispatch(action.setAuth(auth));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
