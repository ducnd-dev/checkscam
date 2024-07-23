import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Detail = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="detail">
      <h2>Thông tin Scam</h2>
      <div className="table_detail">
        <div className="tr">
          <div className="td_l">
            <span>
              <img src={process.env.PUBLIC_URL + "/images/detail_img1.webp"} />
            </span>
            Chủ Tk:
          </div>
          <div className="td_r">Trương Văn Phong</div>
        </div>
        <div className="tr">
          <div className="td_l">
            <span>
              <img src={process.env.PUBLIC_URL + "/images/detail_img2.webp"} />
            </span>
            Ngân Hàng:
          </div>
          <div className="td_r">Mbbank, vs techcombank</div>
        </div>
        <div className="tr">
          <div className="td_l">
            <span>
              <img src={process.env.PUBLIC_URL + "/images/detail_img3.webp"} />
            </span>
            Hạng mục:
          </div>
          <div className="td_r"></div>
        </div>
        <div className="tr tr_img">
          <div className="td_l">
            <span>
              <img src={process.env.PUBLIC_URL + "/images/detail_img4.webp"} />
            </span>
            Ảnh Chụp Bằng Chứng:
          </div>
          <div className="td_r">
            <div className="img_scam" onClick={() => handleShow()}>
              <img src={process.env.PUBLIC_URL + "/images/bill_1.webp"} />
              <img src={process.env.PUBLIC_URL + "/images/bill_2.webp"} />
              <div className="mark_bill">
                <img src={process.env.PUBLIC_URL + "/images/mark_bill.webp"} />
              </div>
            </div>
            <div
              className="overlay_img"
              style={{ display: isShow ? "block" : "none" }}
            >
              <div class="modal_img">
                <ImageGallery items={images} slideInterval={2000} />
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="icon_close"
                  onClick={() => handleShow()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tr">
          <div className="td_l">
            <span>
              <img src={process.env.PUBLIC_URL + "/images/detail_img5.webp"} />
            </span>
            Nội Dung Tố Cáo:
          </div>
        </div>
        <div className="tr_body">
          <p>
            Lừa đảo bán acc game ff , đến khi bank lại block, mọi người nên
            tránh
          </p>
          <div className="qc">
            <br />
            <br />
            <p>
              🔎 Bài tố cáo <b>Trương Văn Phong </b> . Duyệt ngày{" "}
              <b>31/03/2024</b>, cập nhật lần cuối vào <b>31/03/2024</b>, hiện
              có 127 lượt tìm kiếm trên hệ thống. Hiện tại thông tin{" "}
              <b>Trương Văn Phong . chủ stk: 644******************777</b> đã bị
              tố cáo lừa đảo 1 lần trên CS.
            </p>
            <br />
            <p>
              ⚠️ <b>HÃY SỬ DỤNG</b>:{" "}
              <a href="" style={{ fontWeight: "bold", color: "red" }}>
                Bot auto phát hiện & cảnh báo lừa đảo
              </a>{" "}
              trước khi giao dịch online.
            </p>
            <br />
            <p>
              ⚠️ <b>LƯU Ý</b>: Hiện nay lừa đảo đã có thể giả mạo Fb tích xanh &
              Bank ảo trùng tên giống đến 99%. Những kẻ lừa đảo online thường cố
              gắng giải thích, hoặc đưa ra những lý do để bạn không tin vào nội
              dung tố cáo này, làm mọi cách để cố gắng lừa tiền & tài khoản của
              bạn. Nếu có nhận xét khác về bài tố cáo này, vui lòng để lại bình
              luận bên dưới.
            </p>
            <hr />
            <p>
              📑 <b>Nguồn dữ liệu</b>:{" "}
              <a href="">https://checkscam.vn/truong-van-phong/</a>
            </p>
          </div>
        </div>
        <div className="tr_end">
          <span>
            <img
              src={process.env.PUBLIC_URL + "/images/detail_img6.webp"}
              style={{ width: 20, height: 20 }}
            />{" "}
            Bình luận
          </span>
          <span>
            <img src={process.env.PUBLIC_URL + "/images/detail_img7.webp"} />{" "}
            Copy link
          </span>
          <span>⚠️ Yêu cầu gỡ</span>
        </div>
      </div>
      <div className="detail_gif">
        <img src={process.env.PUBLIC_URL + "/images/detail_gif1.webp"} />
      </div>
      <h2>Người tố cáo</h2>
      <div className="table_detail">
        <div className="tr">
          <div className="td_l">Họ Và Tên:</div>
          <div className="td_r">Nguyễn Qu�****************</div>
        </div>
        <div className="tr">
          <div className="td_l">Zalo Liên Hệ:</div>
          <div className="td_r">07850*****</div>
        </div>
        <div className="tr" style={{ border: 0 }}>
          <div className="td_l">Tôi Muốn Gỡ Bài:</div>
          <div className="td_r">
            Dùng Zalo số "07850*****" gửi "Yêu Cầu Gỡ" tới{" "}
            <a href="" style={{ fontWeight: "bold" }}>
              Admin CS
            </a>
          </div>
        </div>
      </div>
      <div className="detail_gif">
        <img src={process.env.PUBLIC_URL + "/images/detail_gif2.webp"} />
      </div>
      <div className="comment">
        <div className="title_cmt">
          <b>Ẩn danh: </b>
          <span>Hôm nay bạn còn 1 lượt</span>
        </div>
        <div className="form_cmt">
          <textarea
            rows="4"
            cols="50"
            placeholder="Để lại bình luận của bạn về nội dung tố cáo này"
          ></textarea>
          <div className="form_cmt_footer">
            <div>
              <span>Biệt danh: </span>
              <b>Jun Jung</b>
            </div>
            <button>Gửi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
