import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <img
          className="img_logo"
          src={process.env.PUBLIC_URL + "/images/logo.webp"}
        />
        <div>
          <span>
            <a href="">Điều khoản </a>
          </span>
          <span> |</span>&nbsp;
          <span>
            <a href="">Liên hệ</a> &nbsp;
          </span>
          <span>|</span>&nbsp;
          <span>
            <a href="">Quảng cáo</a>
          </span>
          <br />
          <a href="">Đổi thẻ cào - Buff like follow - Review maps</a>
        </div>
      </div>
      <div className="list_button_2">
        <Link className="button_item" to="/to-cao-lua-dao">
          Gửi Tố Cáo Scam
        </Link>
        <Link className="button_item" to="/admin-fund">
          Quỹ Bảo Hiểm CS
        </Link>
      </div>
    </>
  );
}

export default Footer;
