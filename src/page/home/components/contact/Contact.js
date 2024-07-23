import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="contact">
      <div
        className="contact_modal"
        style={{ display: isShow ? "block" : "none" }}
      >
        <div className="contact_overlay"></div>
        <div className="contact_body">
          <span style={{ marginRight: 4 }}>Đổi thẻ cào</span>
          <span>Buff like, follow</span> <br /> <br />
          <span>Review maps kiếm tiền </span>
          <FontAwesomeIcon
            className="close_modal"
            icon={faTimesCircle}
            onClick={() => handleShow()}
          />
        </div>
      </div>

      <div className="contact_icon">
        <div
          className="hinh_tron"
          onClick={() => handleShow()}
          style={{ display: !isShow ? "block" : "none" }}
        >
          <span className="cham_nho">
            <FontAwesomeIcon icon={faCircle} />
          </span>
          <span className="cham_to">
            <FontAwesomeIcon icon={faCircle} />
          </span>
          <span className="cham_nho">
            <FontAwesomeIcon icon={faCircle} />
          </span>
        </div>
        <div>
          <a href="">
            <img src={process.env.PUBLIC_URL + "/images/telegram.svg"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
