import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faClock,
  faEye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const Content = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date_1 = day + "/" + month + "/" + year;
  const date_2 = day + " tháng " + month + ", " + year;

  const items = [
    {
      key: "1",
      label: <b>Hệ sinh thái Checkscam bao gồm những gì ...?</b>,
      children: (
        <ul className="ul_collapse">
          Tại CS người dùng mxh có thể:
          <li>Kiểm tra và tố cáo lừa đảo trên mxh</li>
          <li>Danh sách admin có quỹ bảo hiểm tại CS</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: <b>Tôi bị gdv của Checkscam lừa đảo tôi nên làm gì?</b>,
      children: (
        <ul className="ul_collapse">
          Tại CS người dùng mxh có thể:
          <li>Kiểm tra và tố cáo lừa đảo trên mxh</li>
          <li>Danh sách admin có quỹ bảo hiểm tại CS</li>
        </ul>
      ),
    },
    {
      key: "3",
      label: <b>Một số kiểu lừa đảo online mà bạn cần lưu ý:</b>,
      children: (
        <ul className="ul_collapse">
          Tại CS người dùng mxh có thể:
          <li>Kiểm tra và tố cáo lừa đảo trên mxh</li>
          <li>Danh sách admin có quỹ bảo hiểm tại CS</li>
        </ul>
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="content">
      <div className="slide_image_gif">
        <a href="" className="img_gif">
          <img src={process.env.PUBLIC_URL + "/images/slide_gif.gif"} />
        </a>
      </div>
      <div>
        <div className="scam_today">
          <h2>{date_1} có 41 scam bị tố cáo </h2>
        </div>
        <div className="list_scam_today">
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span>
                <Link to="/detail" className="scam_name">
                  Vu Van A
                </Link>
              </span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>12 lượt xem</span>
            </div>
          </div>
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span>
                <Link to="/detail" className="scam_name">
                  Nguyen Thi H
                </Link>
              </span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>3 lượt xem</span>
            </div>
          </div>
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span>
                <Link to="/detail" className="scam_name">
                  Tran C
                </Link>
              </span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>1 lượt xem</span>
            </div>
          </div>
          <div className="xem_them_scam">
            <button>Xem thêm đơn tố cáo hôm nay</button>
          </div>
        </div>
      </div>

      <div className="img_gif_2">
        <div></div>
        <a href="">
          <img src={process.env.PUBLIC_URL + "/images/slide_gif_2.webp"} />
        </a>
      </div>

      <div>
        <div className="scam_today">
          <h2>TOP 5 tìm kiếm ngày </h2>
        </div>
        <div className="list_scam_today">
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span className="scam_name">Vu Van A</span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>12 lượt xem</span>
            </div>
          </div>
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span className="scam_name">Nguyen Thi H</span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>3 lượt xem</span>
            </div>
          </div>
          <div className="list_scam_today_item">
            <div>
              <span>
                <FontAwesomeIcon className="icon_pen" icon={faPenToSquare} />
              </span>
              &nbsp;
              <span className="scam_name">Tran C</span>
            </div>
            <br />
            <div className="info_time">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              &nbsp;
              <span>{date_2}</span>
              &ensp; &ensp;
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              &nbsp;
              <span>1 lượt xem</span>
            </div>
          </div>
        </div>
      </div>

      <table className="table_cmt">
        <thead>
          <tr>
            <th>Người Dùng MXH</th>
            <th>Bình Luận Mới Nhất</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon_user" />
              </span>
              &ensp;PH Kim Khánh
            </td>
            <td>
              <Link to="/detail" className="cmt_body">
                Nó cũng lừa của bạn mình
              </Link>
            </td>
          </tr>
          <tr className="row_color_2">
            <td>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon_user" />
              </span>
              &ensp;Ng Nhu Quynh
            </td>
            <td>
              <Link to="/detail" className="cmt_body">
                Nó cũng scam tôi 2*k
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon_user" />
              </span>
              &ensp;Thúyy Hậuu
            </td>
            <td>
              <Link to="/detail" className="cmt_body">
                E cần địa chỉ người này tên gì vậy a
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon_user" />
              </span>
              &ensp;Thúy Hậu
            </td>
            <td>
              <Link to="/detail" className="cmt_body">
                E cần địa chỉ người này tên gì vậy a
              </Link>
            </td>
          </tr>
          <tr className="row_color_2">
            <td>
              <span>
                <FontAwesomeIcon icon={faUser} className="icon_user" />
              </span>
              &ensp;Trần Văn Sơn
            </td>
            <td>
              <Link to="/detail" className="cmt_body">
                Má cay mất mé 1*k Má cay mất mé 1*k Má cay mất mé 1*k Má cay mất
                mé 1*k Má cay mất mé 1*k, ,,
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="xem_them_scam">
        <button>Xem thêm bình luận</button>
      </div>

      <div className="box_quiz">
        <div className="quiz">Các câu hỏi thường gặp</div>
        <Collapse className="collapse_quiz" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Content;
