import React from "react";
import AboutImg from "../../Assets/About/happy-united-business-team.png";
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="container mt16 mb32">
      <div className="flex jc-content-center gap30">
        <div className="about-content-box">
          <div className="about-content-box2">
            <div className="about-title-box">
              <h1 className="about-content-title">Our Mission</h1>
              <p className="about-content-sub-text">
                <span className="banner-highlight-color mission-sub">At </span>
                MidstreamAI, we are dedicated to transforming midstream oil and
                gas operations through AI-driven, physics-based, AI and hybrid
                solutions that ensure safer, more efficient, and more reliable
                pipelines.
              </p>
            </div>
            <div className="about-title-box">
              <h1 className="about-content-title">Who We Are</h1>
              <p className="about-content-sub-text">
                <span className="banner-highlight-color mission-sub">
                  With{" "}
                </span>
                25+ years of industry expertise, we provide cutting-edge
                solutions that integrate real-time monitoring, advanced
                analytics, and predictive modeling to help pipeline operators
                optimize performance, enhance safety, and meet regulatory
                compliance.
              </p>
            </div>

            <div className="demo-box">
              <Link to="/services" target="_blank">
                <button className="request-demo-button hero-animate-fadeIn">
                  Learn More <i className="fa-solid fa-circle-exclamation"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="image-box mt32">
          <div className="border-box mt16">
            <img src={AboutImg} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurMission;
