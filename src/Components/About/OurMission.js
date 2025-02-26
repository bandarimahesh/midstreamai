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
                MidstreamAI, our mission is to empower pipeline operations teams
                to operate pipelines safer, smarter, and more efficiently
                through innovative and cutting-edge solutions.
              </p>{" "}
            </div>
            <div className="about-title-box">
              <h1 className="about-content-title">Who We Are</h1>
              <p className="about-content-sub-text">
                <span className="banner-highlight-color mission-sub">We </span>
                are a team of engineers, data scientists, and industry experts
                with deep experience in pipeline operations, AI, and real-time
                monitoring. Our founder brings over two decades of experience in
                providing innovative solutions to pipeline operations teams.
                Leveraging this extensive expertise, we design solutions that
                address the unique challenges faced by pipeline operators
                worldwide.
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
        <div className="image-box mt32">
          <div className="border-box mt16">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
