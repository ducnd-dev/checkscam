import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Head = () => {
  const submitFormSearch = (e) => {
    e.preventDefault();
  };
  const handleFormSearch = (e) => {};
  //---setting slick
  const settings = {
    dots: false,
    arrows: false,
    aggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",

    // fade: true,
    autoplay: true,
  };

  return (
    <div className="hompage_head">
      <h2>KIỂM TRA & TỐ CÁO SCAMMER</h2>
      <div>
        <div>
          Hiện có <span className="tk_num">42.023</span>
          <span className="tk_des">stk, sđt</span> &
          <span className="tk_num">8.743</span>
          <span className="tk_des">fb lừa đảo</span> ,
          <span className="tk_num">3.517</span>
          <span className="tk_des">bình luận</span>,
          <span className="tk_num">36</span>
          <span className="tk_des">tố cáo đang chờ duyệt</span>
        </div>
        <div> Sẽ giúp bạn mua bán an toàn hơn khi online !!!</div>
        <div>
          <a className="other_1" href="">
            "Check Ở Đây Trước Khi Giao Dịch"
          </a>
        </div>
      </div>
      <div className="form_search">
        <form onSubmit={(e) => submitFormSearch(e)}>
          <input
            type="text"
            onChange={(e) => handleFormSearch(e)}
            placeholder="Nhập sđt, stk..."
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="slide_hompage">
        <Slider {...settings}>
          <div>
            <a href="">
              Cài đặt App cảnh báo những trang web lừa đảo tại đây !!!
            </a>
          </div>
          <div>
            <a href="">
              Tố cáo website cờ bạc, lừa đảo trực tuyến tại đây !!!!
            </a>
          </div>
        </Slider>
      </div>
      <div className="list_button">
        <Link className="button_item" to="/to-cao-lua-dao">
          Gửi Tố Cáo Scam
        </Link>
        <Link className="button_item" to="/admin-fund">
          Quỹ Bảo Hiểm CS
        </Link>
      </div>
      <div className="slide_image_img">
        <img src={process.env.PUBLIC_URL + "/images/slide_img.svg"} />
      </div>
    </div>
  );
};

export default Head;
