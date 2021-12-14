import React, { useState } from "react";
import "../../css/profile.css";
import { Link, Redirect } from "react-router-dom";
import { RiUserLine, RiFileList3Line } from "react-icons/ri";
import moduleName from "../../services/guestservice/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE } from "./../../constants/constants";
import ProfileService from "../../services/guestservice/ProfileService";
import { BiShow } from "react-icons/bi";
import LoginService from "../../services/loginservice/LoginService";
import avatar from "../../img/avatar.png";

const Profile = ({ isUpdate, changepass }) => {
    const profile = useSelector((state) => state.profile);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [currentProfile, setCurrentProfile] = useState({
        username: auth.username,
        email: auth.email,
        fullName: auth.fullName,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [success, setSuccess] = useState(false);

    const [showPass, setShowPass] = useState({
        showCurrentPass: false,
        showNewPass: false,
        showConfirmPass: false,
    });

    const currentPassHande = () => {
        setShowPass({
            ...showPass,
            showCurrentPass: !showPass.showCurrentPass,
        });
    };

    const newPassHande = () => {
        setShowPass({
            ...showPass,
            showNewPass: !showPass.showNewPass,
        });
    };

    const confirmPassHande = () => {
        setShowPass({
            ...showPass,
            showConfirmPass: !showPass.showConfirmPass,
        });
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setCurrentProfile({
            ...currentProfile,
            [name]: value,
        });
    };

    const updateProfile = () => {
        ProfileService.updateProfile(currentProfile)
            .then((response) => response.text())
            .then((result) => {
                let profile = JSON.parse(result);
                if (profile.message) {
                    alert("Error: " + profile.message);
                } else {
                    dispatch({ type: UPDATE_PROFILE, profile });
                    setSuccess(true);
                    alert("Update profile Successful!");
                }
            })
            .catch((error) => console.log("error", error));
    };

    var redirect = success ? <Redirect to="/sges/myprofile"></Redirect> : <></>;

    const changePassword = () => {
        if (checkValidate) {
            if (checkConfirm) {
                LoginService.login(currentProfile.username, currentProfile.currentPassword).then(
                    (response) => {
                        if (response.status === 500) {
                            setCurrentProfile({
                                ...currentProfile,
                                currentPassword: "",
                                newPassword: "",
                                confirmPassword: "",
                            });
                            alert("Username or Password incorrect!");
                        } else if (response.status === 200) {
                            ProfileService.changePassword(
                                currentProfile.currentPassword,
                                currentProfile.newPassword
                            );
                            setCurrentProfile({
                                ...currentProfile,
                                currentPassword: "",
                                newPassword: "",
                                confirmPassword: "",
                            });
                            setSuccess(true);
                            alert("Change password successfully!");
                        }
                    }
                );
            }
            if (!checkConfirm) {
                alert("Confirm password is incorrect !");
            }
        }
        if (!checkValidate) {
            alert("Pasword fields must not be empty!");
        }
    };

    const checkValidate = () => {
        return currentProfile.newPassword === "" ||
            currentProfile.newPassword === "" ||
            currentProfile.confirmPassword === ""
            ? false
            : true;
    };

    const checkConfirm = () => {
        return currentProfile.newPassword !== currentProfile.confirmPassword ? false : true;
    };

    return (
        <div className="profile">
            {redirect}
            <div className="container">
                <div className="row m-0 profile-layout">
                    <div className="col-3 py-3 profile-menu">
                        <div className="row m-0 d-flex pb-3 account">
                            <div className="col-4 p-0 d-flex justify-content-center align-items-center">
                                <img src={avatar} className="img-fluid" width="100%" alt="avatar" />
                            </div>
                            <div className="col-8 p-0">
                                <div className="d-grid">
                                    <span>
                                        <b>{auth.username}</b>
                                    </span>
                                    <span>{auth.fullName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 sub-menu mt-4">
                            <Link to="myprofile">
                                <div className="h-100 btn d-flex justify-content-center align-items-center">
                                    <div className="col-3 icon-submenu">
                                        <RiUserLine />
                                    </div>
                                    <div className="col-9 text-start">
                                        <span>Tài khoản của tôi</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="updateprofile">
                                <div className="h-100 btn d-flex justify-content-center align-items-center">
                                    <div className="col-3 icon-submenu"></div>
                                    <div className="col-9 text-start">
                                        <span>Cập nhật thông tin</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="changepassword">
                                <div className="h-100 btn d-flex justify-content-center align-items-center">
                                    <div className="col-3 icon-submenu"></div>
                                    <div className="col-9 text-start">
                                        <span>Đổi mật khẩu</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="myorder">
                                <div className="h-100 btn d-flex justify-content-center align-items-center">
                                    <div className="col-3 icon-submenu">
                                        <RiFileList3Line />
                                    </div>
                                    <div className="col-9 text-start">
                                        <span>Đơn mua</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="card py-3">
                            <div className="px-4">
                                {changepass ? (
                                    <div className="title pb-3">
                                        <h4>Đổi mật khẩu</h4>
                                        <small>
                                            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu
                                            cho người khác
                                        </small>
                                    </div>
                                ) : (
                                    <div className="title pb-3">
                                        <h4>Hồ sơ của tôi</h4>
                                        {isUpdate ? (
                                            <small>
                                                Quản lý thông tin hồ sơ để bảo mật tài khoản
                                            </small>
                                        ) : (
                                            <small>Thông tin hồ sơ</small>
                                        )}
                                    </div>
                                )}
                                <div className="content-info mt-4">
                                    <div className="row m-0">
                                        <div
                                            className={
                                                changepass
                                                    ? "col-10 left-content"
                                                    : "col-8 left-content"
                                            }
                                        >
                                            <div className="row d-flex align-items-center username pt-4">
                                                <div className="col-4 label">
                                                    {changepass ? (
                                                        <label htmlFor="currentpass">
                                                            Mật khẩu hiện tại
                                                        </label>
                                                    ) : (
                                                        <label htmlFor="username">
                                                            Tên đăng nhập
                                                        </label>
                                                    )}
                                                </div>
                                                <div
                                                    className="col-8 content d-flex align-items-center"
                                                    style={{
                                                        position: "relative",
                                                        paddingRight: "0",
                                                    }}
                                                >
                                                    {changepass ? (
                                                        <>
                                                            <input
                                                                type={
                                                                    showPass.showCurrentPass ==
                                                                    false
                                                                        ? "password"
                                                                        : "text"
                                                                }
                                                                id="currentpass"
                                                                value={
                                                                    currentProfile.currentPassword
                                                                }
                                                                name="currentPassword"
                                                                onChange={onChange}
                                                            />
                                                            <Link
                                                                to="#"
                                                                style={{
                                                                    position: "absolute",
                                                                    right: "0",
                                                                    borderLeft: "1px solid #e4e4e4",
                                                                    padding: "0 10px",
                                                                }}
                                                                onClick={currentPassHande}
                                                            >
                                                                <div className="btn">
                                                                    <BiShow />
                                                                </div>
                                                            </Link>
                                                        </>
                                                    ) : (
                                                        <span>{currentProfile.username}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row d-flex align-items-center fullname pt-4">
                                                <div className="col-4 label">
                                                    {changepass ? (
                                                        <label htmlFor="newpass">
                                                            Mật khẩu mới
                                                        </label>
                                                    ) : (
                                                        <label htmlFor="fullname">Họ và tên</label>
                                                    )}
                                                </div>
                                                <div
                                                    className="col-8 content d-flex align-items-center"
                                                    style={{
                                                        position: "relative",
                                                        paddingRight: "0",
                                                    }}
                                                >
                                                    {changepass ? (
                                                        <>
                                                            <input
                                                                type={
                                                                    showPass.showNewPass == false
                                                                        ? "password"
                                                                        : "text"
                                                                }
                                                                id="newpass"
                                                                value={currentProfile.newPassword}
                                                                name="newPassword"
                                                                onChange={onChange}
                                                            />
                                                            <Link
                                                                to="#"
                                                                style={{
                                                                    position: "absolute",
                                                                    right: "0",
                                                                    borderLeft: "1px solid #e4e4e4",
                                                                    padding: "0 10px",
                                                                }}
                                                                onClick={newPassHande}
                                                            >
                                                                <div className="btn">
                                                                    <BiShow />
                                                                </div>
                                                            </Link>
                                                        </>
                                                    ) : isUpdate ? (
                                                        <input
                                                            type="text"
                                                            id="fullname"
                                                            value={currentProfile.fullName}
                                                            name="fullName"
                                                            onChange={onChange}
                                                        />
                                                    ) : (
                                                        <span>{currentProfile.fullName}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row d-flex align-items-center email pt-4">
                                                <div className="col-4 label">
                                                    {changepass ? (
                                                        <label htmlFor="confirmpass">
                                                            Xác nhận mật khẩu mới
                                                        </label>
                                                    ) : (
                                                        <label htmlFor="email">Email</label>
                                                    )}
                                                </div>
                                                <div
                                                    className="col-8 content d-flex align-items-center"
                                                    style={{
                                                        position: "relative",
                                                        paddingRight: "0",
                                                    }}
                                                >
                                                    {changepass ? (
                                                        <>
                                                            <input
                                                                type={
                                                                    showPass.showConfirmPass ==
                                                                    false
                                                                        ? "password"
                                                                        : "text"
                                                                }
                                                                id="confirmpass"
                                                                value={
                                                                    currentProfile.confirmPassword
                                                                }
                                                                name="confirmPassword"
                                                                onChange={onChange}
                                                            />
                                                            <Link
                                                                to="#"
                                                                style={{
                                                                    position: "absolute",
                                                                    right: "0",
                                                                    borderLeft: "1px solid #e4e4e4",
                                                                    padding: "0 10px",
                                                                }}
                                                                onClick={confirmPassHande}
                                                            >
                                                                <div className="btn">
                                                                    <BiShow />
                                                                </div>
                                                            </Link>
                                                        </>
                                                    ) : isUpdate ? (
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            value={currentProfile.email}
                                                            name="email"
                                                            onChange={onChange}
                                                        />
                                                    ) : (
                                                        <span>{currentProfile.email}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row d-flex align-items-center pt-4">
                                                <div className="col-4 label"></div>
                                                <div
                                                    className="col-8"
                                                    style={{ paddingRight: "0" }}
                                                >
                                                    {changepass ? (
                                                        <>
                                                            <Link
                                                                to="changepassword"
                                                                className="save-btn col-6"
                                                                onClick={changePassword}
                                                            >
                                                                <div className="btn">Xác nhận</div>
                                                            </Link>
                                                            <Link to="#" style={{ float: "right" }}>
                                                                <div className="btn border-0 forget-btn px-0">
                                                                    Quên mật khẩu?
                                                                </div>
                                                            </Link>
                                                        </>
                                                    ) : isUpdate ? (
                                                        auth.fullName !== currentProfile.fullName ||
                                                        auth.email !== currentProfile.email ? (
                                                            <Link
                                                                to="#"
                                                                className="save-btn"
                                                                onClick={updateProfile}
                                                            >
                                                                <div className="btn">Lưu</div>
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                                to="#"
                                                                className="save-btn"
                                                                style={{
                                                                    backgroundColor: "ButtonFace",
                                                                    cursor: "default",
                                                                }}
                                                            >
                                                                <div className="btn disabled text-dark">
                                                                    Lưu
                                                                </div>
                                                            </Link>
                                                        )
                                                    ) : (
                                                        <Link
                                                            to="updateprofile"
                                                            className="save-btn"
                                                        >
                                                            <div className="btn">Chỉnh sửa</div>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {changepass ? (
                                            <></>
                                        ) : (
                                            <div className="col-4 right-content d-grid justify-content-center align-items-center">
                                                <div className="text-center d-flex align-items-center justify-content-center avatar">
                                                    {isUpdate ? (
                                                        <label
                                                            htmlFor="file"
                                                            className="btn border-0 p-0"
                                                        >
                                                            <img
                                                                src={avatar}
                                                                className="img-fluid"
                                                                alt="avatar"
                                                            />
                                                        </label>
                                                    ) : (
                                                        <img
                                                            src={avatar}
                                                            className="img-fluid"
                                                            alt="avatar"
                                                        />
                                                    )}
                                                </div>
                                                <div className="text-center">
                                                    {isUpdate ? (
                                                        <>
                                                            <input
                                                                type="file"
                                                                id="file"
                                                                accept="image/*"
                                                                name="photo"
                                                                onChange={onChange}
                                                            />
                                                            <label htmlFor="file" className="btn">
                                                                Chọn ảnh
                                                            </label>
                                                        </>
                                                    ) : (
                                                        <span>Hình ảnh đại diện</span>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
