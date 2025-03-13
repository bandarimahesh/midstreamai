import React from "react";
import "./About.css";
import WhyChooseUs2 from "../WhyChooseUs/WhyChooseUs2";
import OurMission from "./OurMission";
const About = () => {
  return (
    <>
      <div className="container mt48">
        <div className="about-title-box2">
          <h1 className="main-highlight-title">
            About - <span className="banner-highlight-color"> Us</span>
          </h1>
          <p className="about-content-sub-text">
            We are dedicated to providing pipeline operations that <br />
            empower businesses and users.
          </p>
        </div>
      </div>

      <section className="container">
        <div className="about-banner">
          <div className="about-overlay"></div>
          <div className="about-banner-content">
            {/* <h1>
              About <span className="banner-highlight-color"> Us</span>
            </h1>
            <p>
              We are dedicated to providing innovative solutions that empower
              businesses and individuals.
            </p> */}
          </div>
        </div>
      </section>
      <OurMission />
    </>
  );
};

export default About;
