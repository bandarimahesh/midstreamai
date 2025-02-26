import React from "react";
import "./Highlights.css";
export const HighlightCard1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="highlight-title-box position-relative">
          <h1 className="main-highlight-title">
            Key - <span className="banner-highlight-color"> Highlights</span>
          </h1>
        </div>
        <div className="highlight-container mt48">
          <div className="flex align-center justify-content-center gap30">
            <div className="glass-card" data-aos="fade-right">
              <div className="glass-card-content">
                <i className="fa-solid fa-clock highlight-icon"></i>
                <h1 className="highlight-title">AI-Powered Leak Detection</h1>
                <p className="highlight-sub-text">
                  Real-time leak detection with unparalleled accuracy
                </p>
              </div>
            </div>
            <div className="glass-card" data-aos="fade-up">
              <div className="glass-card-content">
                <i className="fa-solid fa-lightbulb highlight-icon"></i>{" "}
                <h1 className="highlight-title">Operational Optimization</h1>
                <p className="highlight-sub-text">
                  Reduce energy consumption and improve flow efficiency{" "}
                </p>
              </div>
            </div>{" "}
            <div className="glass-card" data-aos="fade-up">
              <div className="glass-card-content">
                <i className="fa-solid fa-triangle-exclamation highlight-icon"></i>
                <h1 className="highlight-title">Predictive Maintenance</h1>
                <p className="highlight-sub-text">
                  Prevent failures before they happen
                </p>
              </div>
            </div>{" "}
            <div className="glass-card" data-aos="fade-left">
              <div className="glass-card-content">
                <i className="fa-solid fa-file-excel highlight-icon"></i>{" "}
                <h1 className="highlight-title">Regulatory Compliance</h1>
                <p className="highlight-sub-text">
                  Automated reporting and adherence to global safety standards{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard1;
