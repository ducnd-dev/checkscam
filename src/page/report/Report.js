import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const Report = () => {
  return (
    <div className="report">
      <h3>Thông tin kẻ lừa đảo</h3>
      <div className="form_report_box">
        <form className="form_report">
          <div className="form_report_row">
            <div className="form_report_row_l">
              <input type="text" placeholder="Chủ tài khoản nhận tiền" />
              <span>Tên chủ tài khoản *</span>
            </div>
            <div className="form_report_row_r">
              <input type="text" placeholder="Số tài khoản nhận tiền" />
              <span>Số tài khoản *</span>
            </div>
          </div>
          <div className="form_report_row">
            <div className="form_report_row_l">
              <input type="text" placeholder="Ngân hàng" />
              <span>Ngân hàng *</span>
            </div>
            <div className="form_report_row_r">
              <input type="text" placeholder="Link facebook kẻ lừa đảo" />
              <span>Link facebook (nếu có)</span>
            </div>
          </div>
          <div className="text_row">
            <span className="text_row_icon">
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </span>
            &nbsp;
            <span className="text_row_des">
              Link Fb scam sẽ bị gắn auto cảnh báo lừa đảo trên
            </span>
            &nbsp;
            <span className="text_row_link">
              <a href=""> Cộng đồng Checkscam</a>
            </span>
          </div>
          <div className="input_upload_row">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
              accept=".jpg, .png, .jpeg"
              multiple={true}
              // defaultFileList={[...fileList]}
              beforeUpload={() => {
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}></Button>
              &nbsp;
              <span>
                Upload bill chuyển tiền & đoạn chat người đó lừa đảo bạn.
              </span>
            </Upload>
          </div>
          <div className="text_row">
            <span className="text_row_icon">
              <FontAwesomeIcon icon={faTriangleExclamation} />
            </span>
            &nbsp;
            <span className="text_row_des">
              Bài tố cáo sẽ bị hủy nếu không đủ bằng chứng chứng minh.
            </span>
          </div>
          <div className="input_tarea_row">
            <textarea
              rows="5"
              cols="50"
              placeholder="Nói rõ đầu đuôi câu chuyện để CS có thể xác minh vấn đề"
            ></textarea>
            <span>Tên chủ tài khoản *</span>
          </div>
          <h3>Người xác thực </h3>
          <div className="form_report_row">
            <div className="form_report_row_l">
              <input type="text" placeholder="Nhập họ, tên của bạn" />
              <span>Họ và tên *</span>
            </div>
            <div className="form_report_row_r">
              <input
                type="text"
                placeholder="Nhập số zalo bạn đang sử dụng (mở tìm kiếm)"
              />
              <span>Liên hệ zalo *</span>
            </div>
          </div>
          <div className="input_radio_row">
            <label>
              <input type="radio" name="who" value="male" /> Tôi chỉ là nạn nhân
            </label>
            <label>
              <input type="radio" name="who" value="male" /> Phốt này trên group
              tôi chỉ đăng hộ
            </label>
          </div>
          <div className="sumit_row">
            <button type="submit">Gửi Duyệt </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
