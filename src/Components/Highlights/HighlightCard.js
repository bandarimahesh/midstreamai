import React from "react";
import "./Highlights.css";
export const HighlightCard = () => {
  return (
    <div className="highlight-container position-absolute ">
      <div className="flex align-center justify-content-center gap20">
        <div className="glass-card one ">
          <h2 className="highlight-title">AI-Powered Leak Detection</h2>
          <p className="highlight-sub-text">
            Real-time leak detection with unparalleled accuracy
          </p>
        </div>{" "}
        <div className="glass-card two">
          <h2 className="highlight-title">AI-Powered Leak Detection</h2>
          <p className="highlight-sub-text">
            Real-time leak detection with unparalleled accuracy
          </p>
        </div>{" "}
      </div>
      <div className="flex align-center justify-content-center">
        <div className="glass-card three">
          <h2 className="highlight-title">AI-Powered Leak Detection</h2>
          <p className="highlight-sub-text">
            Real-time leak detection with unparalleled accuracy
          </p>
        </div>{" "}
        <div className="glass-card four one ">
          <h2 className="highlight-title">AI-Powered Leak Detection</h2>
          <p className="highlight-sub-text">
            Real-time leak detection with unparalleled accuracy
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default HighlightCard;
