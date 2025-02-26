import React from "react";
import "./Technology.css";
const IndustriesServe = () => {
  return (
    <div className="technology-backgroun">
      <div className="highlight-title-box position-relative">
        <h1 className="main-highlight-title">
          Industries - <span className="banner-highlight-color"> We </span>{" "}
          Serve
        </h1>
      </div>
      <div className="container mb32">
        <div className="industries-grid-container">
          <div className="industries-card">
            <h1>Crude Oil Pipelines</h1>
          </div>
          <div className="industries-card">
            <h1>Refined Products Pipelines</h1>
          </div>
          <div className="industries-card">
            <h1>Petrochemical & Chemical Pipelines</h1>
          </div>
          <div className="industries-card">
            <h1>Natural Gas and Liquids Transmission</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServe;
