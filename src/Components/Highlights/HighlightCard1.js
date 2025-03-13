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
          <div className="flex gap30">
            <div className="glass-card" data-aos="fade-right">
              <div className="glass-card-content">
                <i className="fa-solid fa-clock highlight-icon"></i>
                <h1 className="highlight-title">
                  Leak Detection & Real-Time Monitoring
                </h1>
                <p className="highlight-sub-text">
                  Continuously tracks pipeline conditions to detect leaks,
                  anomalies, and potential failures before they escalate.{" "}
                </p>
              </div>
            </div>
            <div className="glass-card" data-aos="fade-up">
              <div className="glass-card-content">
                <i className="fa-solid fa-lightbulb highlight-icon"></i>{" "}
                <h1 className="highlight-title">
                  Physics-Based & Hybrid Models
                </h1>
                <p className="highlight-sub-text">
                  Combines physics-based models with AI to provide accurate
                  flow, pressure, and operational state.
                </p>
              </div>
            </div>{" "}
            {/* <div className="glass-card" data-aos="fade-up">
              <div className="glass-card-content">
                <i className="fa-solid fa-triangle-exclamation highlight-icon"></i>
                <h1 className="highlight-title">Predictive Maintenance</h1>
                <p className="highlight-sub-text">
                  Prevent failures before they happen
                </p>
              </div>
            </div>{" "} */}
            <div className="glass-card" data-aos="fade-left">
              <div className="glass-card-content">
                <i className="fa-solid fa-file-excel highlight-icon"></i>{" "}
                <h1 className="highlight-title">
                  Regulatory Compliance & Reporting
                </h1>
                <p className="highlight-sub-text">
                  Ensures adherence to safety and environmental regulations,
                  including leak detection requirements, with automated
                  compliance tracking and reporting.{" "}
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
