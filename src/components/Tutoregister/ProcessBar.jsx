import React from "react";
import "../../assets/css/TutorRegister/ProcessBar.css";

const steps = [
    "About", "Photo", "Certification", "Education", 
    "Description", "Video", "Availability", "Pricing"
  ];
  
  const ProgressBar = ({ step,setStep }) => {
    return (
      <div className="progress-bar">
        {steps.map((label, index) => (
          <div className={`step2 ${index + 1 <= step ? "completed" : ""}`}
          onClick={() => index + 1 <= step && setStep(index + 1)} // Cho phép quay lại bước trước
          style={{ cursor: index + 1 <= step ? "pointer" : "default" }} // Hiển thị trỏ chuột nếu có thể nhấn 
          >
            <div className="step-circle">
              {index + 1 <= step ? "✔" : index + 1}
            </div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgressBar;