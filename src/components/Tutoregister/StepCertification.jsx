import React, { useState } from "react";
import "../../assets/css/TutorRegister/StepCertification.css";

const StepCertification = ({ nextStep, prevStep }) => {
  const [certification, setCertification] = useState("");

  return (
    <div className="step-certification">
      <h2>Chứng chỉ giảng dạy</h2>
      <p>Hãy thêm chứng chỉ nếu bạn có để tăng độ tin cậy.</p>

      <label>Chọn môn giảng dạy</label>
      <select>
        <option>Tiếng Anh</option>
        <option>Toán</option>
        <option>Vật lý</option>
      </select>

      <label>Chọn chứng chỉ</label>
      <select value={certification} onChange={(e) => setCertification(e.target.value)}>
        <option>Chọn chứng chỉ</option>
        <option>TESOL</option>
        <option>IELTS</option>
      </select>

      <button className="upload-button">Tải lên chứng chỉ</button>

      <div className="navigation-buttons">
        <button onClick={prevStep} className="back-button">Quay lại</button>
        <button onClick={nextStep} className="next-button">Lưu và tiếp tục</button>
      </div>
    </div>
  );
};

export default StepCertification;
