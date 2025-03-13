import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <div className="banner">
        <div className="container">
          <div className="row ">
            <div className="banner-content">
              <h1 className="banner-title hero-animate-slideUp">
                Smarter Pipelines, <br />
                Safer Operations, <br />
                Maximum
                <span className="banner-highlight-color"> Efficiency</span>
              </h1>
              <p className="banner-sub-text hero-animate-slideRight">
                MidstreamAI solutions use physics-based models, AI, advanced
                analytics, and real-time monitoring to make pipelines smarter,
                improve safety, and maximize efficiency.
              </p>
              <div className="banner-buttons-box">
                <div className="flex align-center js-content-center grid-space">
                  <div className="demo-box">
                    <Link to="/contact-us" target="_blank">
                      <button className="request-demo-button hero-animate-fadeIn">
                        Request Demo <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                  <div className="learn-more-box">
                    {" "}
                    <Link to="/services" target="_blank">
                      <button className="learn-more-button hero-animate-fadeIn">
                        Learn More{" "}
                        <i className="fa-solid fa-circle-exclamation"></i>
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
