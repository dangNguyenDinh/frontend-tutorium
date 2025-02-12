import React, { useState } from "react";
import "../../assets/css/TutorRegister/StepDescription.css";

const StepDescription = ({ nextStep, prevStep }) => {
  const [description, setDescription] = useState("");

  return (
    <div className="step-description">
      <h2>Mô tả hồ sơ</h2>
      <p>Viết một mô tả ngắn gọn để giới thiệu bản thân.</p>

      <textarea
        rows="5"
        placeholder="Hãy giới thiệu kinh nghiệm và phong cách giảng dạy của bạn..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="navigation-buttons">
        <button onClick={prevStep} className="back-button">Quay lại</button>
        <button onClick={nextStep} className="next-button">Lưu và tiếp tục</button>
      </div>
    </div>
  );
};

export default StepDescription;
