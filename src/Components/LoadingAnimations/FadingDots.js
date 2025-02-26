import React from "react";
import "./FadingDots.css";
import LogoIcon from "../../Assets/Midstream AI _ Logo Icon.svg";
import Navbar from "../Navbar/Navbar";

const FadingDots = () => {
  return (
    <div className="fading-dot-container">
      <Navbar />
      <img src={LogoIcon} alt="Loading" className="fading-logo" />
      <h3 className="fading-title">MidstreamAI</h3>
      <div className="fading-dots">
        <div className="fading-dot"></div>
        <div className="fading-dot"></div>
        <div className="fading-dot"></div>
        <div className="fading-dot"></div>
        <div className="fading-dot"></div>
      </div>
    </div>
  );
};

export default FadingDots;
