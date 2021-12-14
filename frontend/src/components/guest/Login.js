import { Component } from "react";
import LoginService from "../../services/loginservice/LoginService";
import * as action from "../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            alert: {
                status: false,
                value: true,
                message: "",
            },
        };
    }

    onChangeHand = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        LoginService.login(this.state.username, this.state.password)
            .then((response) => {
                if (response.status === 500) {
                    this.setState({
                        alert: {
                            status: true,
                            value: false,
                            message: "Username or Password is not correct !",
                        },
                    });
                } else if (response.status === 200) {
                    this.setState({
                        alert: {
                            status: true,
                            value: true,
                            message: "Sign in complete !",
                        },
                    });
                }
                return response.text();
            })
            .then((result) => {
                localStorage.setItem("token", result);
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + result);
                myHeaders.append("Cookie", "JSESSIONID=C6B69B1366935F0C4E7CCAC8732291BA");

                var requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };

                fetch("http://localhost:8080/getProfile", requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                        console.log(result);
                        let user = JSON.parse(result);
                        let auth = {
                            username: user.username,
                            fullName: user.fullName,
                            email: user.email,
                            photo: user.photo,
                            roles: user.roles,
                        };
                        this.props.setAuth(auth);
                        console.log("auth", auth);
                        this.props.setCart([]);
                    })
                    .catch((error) => console.log("error", error));
            })
            .catch((error) => console.log("error", error));
    };

    render() {
        var alert =
            this.state.alert.status === false ? (
                <div></div>
            ) : (
                <div
                    className={
                        this.state.err
                            ? "disable"
                            : this.state.alert.value
                            ? "alert alert-primary"
                            : "alert alert-danger"
                    }
                    role="alert"
                >
                    {this.state.alert.message}
                    <Redirect to="/sges"></Redirect>
                </div>
            );
        return (
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="p-5">
                        <h3>Đăng nhập</h3>
                        <form className="mt-3" onSubmit={this.onSubmit}>
                            <div className="mb-3">
                                <label>Tài khản</label>
                                <input
                                    className="form-control border border-3 rounded-0"
                                    type="text"
                                    name="username"
                                    onChange={this.onChangeHand}
                                    placeholder="Nhập tài khoản"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Mật khẩu</label>
                                <input
                                    className="form-control border border-3 rounded-0"
                                    type="password"
                                    name="password"
                                    onChange={this.onChangeHand}
                                    placeholder="Nhập mật khẩu"
                                />
                            </div>
                            {alert}
                            <button
                                className="mt-3 p-0 pt-2 btn w-100 rounded-0"
                                style={{ backgroundColor: "#A3C7BD" }}
                            >
                                <h5 style={{ color: "white" }}>Đăng nhập</h5>
                            </button>
                            <a className="btn btn-block social-btn google" href="http://localhost:8080/oauth2/authorize/google">
                             Log in with Google</a>
                        </form>
                    </div>
                </div>
                <div className="col"></div>
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
        setCart: (cart) => {
            dispatch(action.setCart(cart));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
