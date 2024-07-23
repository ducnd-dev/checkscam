import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faFacebookMessenger,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="profile">
      <img src={process.env.PUBLIC_URL + "/images/admin1.webp"} />
      <h1>Nguyễn Hoàng Dương</h1>
      <div className="message">
        <button>
          <span>
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </span>
          Check Messenger
        </button>
        <button
          className="telegram_des"
          style={{ zIndex: isShow ? 4 : 1, color: isShow ? "#FFFF00" : "#FFF" }}
        >
          <span>
            <FontAwesomeIcon icon={faTelegram} />
          </span>
          <span>Bot Auto Check</span>
          <div
            className="body_modal"
            style={{ display: isShow ? "block" : "none" }}
          >
            <div>
              Gửi "Link Fb Gdv, Sđt, Stk" vào nhóm Tele để BOT auto check real,
              fake, Scam giúp mn nhé !!!
            </div>
            <div className="body_modal_button">
              <button onClick={() => handleShow()}>Ok</button>
            </div>
          </div>
          <div
            className="telegram_rim"
            style={{ display: isShow ? "block" : "none" }}
          ></div>
        </button>
      </div>
      <div className="profile_contact">
        <div className="contact_1">
          <div className="social_box">
            <div className="social">
              <div>
                <h3>Thông Tin Liên Hệ:</h3>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/images/fb.webp"}
                    className="fb_img"
                  />
                </span>
                Fb (chính): 1849617435
              </div>
              <div>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/images/zalo.png"}
                    className="zl_img"
                  />
                </span>
                Zalo: 0934567643
              </div>
              <div>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "/images/ea.png"}
                    className="ea_img"
                  />
                </span>
                Web:
              </div>
            </div>
            <div className="qr">
              <img src={process.env.PUBLIC_URL + "/images/qr.png"} />
            </div>
          </div>
        </div>
        <div className="fund_1">
          <div className="lock">
            <div>
              <h3>Quỹ Bảo Hiểm CS:</h3>
              Từ ngày
              <span className="text_red">09/04/2021</span>
              <span className="text_gray">CS sẽ bảo đảm an toàn cho bạn</span>
              với số tiền nằm trong Quỹ Bảo Hiểm
              <span className="text_red">10.000.000.vnđ</span>
              của <span className="text_red"> Nguyễn Hoàng Dương</span>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faLock} className="icon_lock" /> */}
              <img
                className="icon_lock"
                src={process.env.PUBLIC_URL + "/images/logo.webp"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service_box">
        <div className="service">
          <h3>Dịch vụ cung cấp:</h3>
          <ul>
            <li> Trung gian mua bán (chuyên youtube) </li>
          </ul>
        </div>
        <div className="tk">
          <h3>Chủ tài khoản "Nguyễn Hoàng Dương"</h3>
          <ul>
            <li>
              <b>Vcb</b>: 1031000002351{" "}
            </li>
            <li>
              <b>Bidv</b>: 45010004914945
            </li>
            <li>
              <b>Momo</b>: 0934567643
            </li>
          </ul>
        </div>
        <div className="mark">
          <img src={process.env.PUBLIC_URL + "/images/mark.svg"} />
        </div>
      </div>
      <div className="text_info">
        <span className="text_info_icon">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
        &nbsp;
        <span className="text_info_des">
          <b className="text_info_1">LƯU Ý KHI GIAO DỊCH</b>: Hãy luôn tuân thủ
          <a href="" className="text_info_2">
            Nội Quy Giao Dịch
          </a>
          . Để tránh gặp Fake, Scam. Bạn nhớ Coppy
          <b>"Link BH, Link fb ad, Sđt, Stk"</b> gửi vào{" "}
          <a href="" className="text_info_2">
            Cộng đồng Checkscam
          </a>
          . Bot tele sẽ tự động kiểm tra và trả lời ...!
        </span>
      </div>

      <div
        className="modal_telegram"
        style={{ display: isShow ? "block" : "none" }}
      >
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Profile;
