import React from "react";
import "./Home.css";
import  HighlightCard from "../Highlights/HighlightCard";
const Home = () => {
  return (
    <main>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="flex align-items-center">
              <div className="banner-content">
                <h1 className="banner-title hero-animate-slideUp">
                  Smarter Pipelines, <br /> Safer Operations, Maximum
                  <span className="banner-highlight-color"> Efficiency</span>
                </h1>
                <p className="banner-sub-text hero-animate-slideRight">
                  MidstreamAI leverages cutting-edge AI, advanced analytics, and
                  real-time monitoring to enhance pipeline safety, optimize
                  operations, and maximize efficiency.
                </p>
                <div className="banner-buttons-box">
                  <div className="flex align-center js-content-center grid-space">
                    <div className="demo-box">
                      <button className="request-demo-button hero-animate-fadeIn">
                        Request Demo <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="learn-more-box">
                      <button className="learn-more-button hero-animate-fadeIn">
                        Learn More{" "}
                        <i className="fa-solid fa-circle-exclamation"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content position-relative">
                <HighlightCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
