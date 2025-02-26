import React from "react";

const LocateUs = () => {
  return (
    <div className="container mb32">
      <div className="address-card">
        <div className="flex align-items-center justify-content-center">
          <h2 className="address-title">📍</h2>
          <p className="address-subtitle">
            You can find us at the address below:
          </p>
        </div>
        <div className="address-box">
          <h3 className="company-name">MidstreamAI LLC,</h3>
          <p className="address-line">
            5702 Oban Terrace Ln, Sugar Land, TX 77479, USA
          </p>
        </div>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Locate on Map
        </a>
      </div>
    </div>
  );
};

export default LocateUs;
