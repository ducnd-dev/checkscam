import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Fund = () => {
  return (
    <div className="fund">
      <h2>QUỸ BẢO HIỂM CS</h2>
      <div className="form_search_admin_fund">
        <form onSubmit={() => {}}>
          <input
            type="text"
            onChange={() => {}}
            placeholder="Tìm admin theo tên"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <ul className="fund_name">
        <li>
          <a href="">Tất cả</a>
        </li>
        <li>
          <a href="">GDTG - Ex tiền</a>
        </li>
        <li>
          <a href="">Trung gian Youtube</a>
        </li>
        <li>
          <a href="">Free Fire</a>
        </li>
        <li>
          <a href="">Wechat</a>
        </li>
        <li>
          <a href="">Tài khoản Gmail</a>
        </li>
        <li>
          <a href="">Mua bán Zalo</a>
        </li>
        <li>
          <a href="">Liên Quân</a>
        </li>
        <li>
          <a href="">Game pass - Roblox - Bloxfruit - Pet99</a>
        </li>
        <li>
          <a href="">Cày thuê FF, LQ</a>
        </li>
        <li>
          <a href="">FIFA Online 4</a>
        </li>
        <li>
          <a href="">Ngọc rồng online</a>
        </li>
      </ul>
      <div className="fund_avt">
        <div className="fund_avt_title">
          <FontAwesomeIcon icon={faUserSecret} />
          <span>Tìm admin theo số thứ tự:</span>
        </div>
        <ul className="fund_avt_img">
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin1.webp"} />
              <div>1.Nguyễn Hoàng Dương</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin2.webp"} />
              <div>2.Trần Ngọc Thu</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin3.webp"} />
              <div>3.Đặng Khang DŨng</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin1.webp"} />
              <div>4.Nguyễn Hoàng Dương</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin2.webp"} />
              <div>5.Trần Ngọc Thu</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin3.webp"} />
              <div>6.Đặng Khang DŨng</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin1.webp"} />
              <div>7.Nguyễn Hoàng Dương</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin2.webp"} />
              <div>8.Trần Ngọc Thu</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin3.webp"} />
              <div>9.Đặng Khang DŨng</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin1.webp"} />
              <div>10.Nguyễn Hoàng Dương</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin2.webp"} />
              <div>11.Trần Ngọc Thu</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={process.env.PUBLIC_URL + "/images/admin3.webp"} />
              <div>12.Đặng Khang DŨng</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fund;
