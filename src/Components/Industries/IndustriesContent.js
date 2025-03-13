import React from "react";
import { Link } from "react-router-dom";

const IndustriesContent = () => {
  return (
    <section className="container mt16">
      <div className="flex jc-content-center gap30">
        <div className="about-content-box">
          <div className="about-title-box">
            <p className="about-content-sub-text">
              <span className="banner-highlight-color mission-sub">
                MidstreamAI{" "}
              </span>
              specializes in the <b>midstream pipeline operations </b> ,
              providing advanced <b> physics-based, AI-driven, and hybrid </b>
              solutions to optimize operations, enhance safety, and ensure
              compliance. Our expertise supports{" "}
              <b>
                liquid pipelines (crude oil & refined products), gas pipelines
                (natural gas & NGLs), and chemical & petrochemical pipelines
              </b>{" "}
              by leveraging{" "}
              <b>modeling, real-time monitoring, and AI-driven analytics.</b>{" "}
              Our solutions help operators{" "}
              <b>transport energy products efficiently and safely,</b> optimize{" "}
              <b>flow rates and integrity management,</b> and ensure compliance
              with <b>regulations.</b>
            </p>{" "}
            <p className="about-content-sub-text mt16">
              Contact us to learn how MidstreamAI can transform your pipeline
              operations!{" "}
            </p>
          </div>

          <div className="demo-box">
            <Link to="/contact-us" target="_blank">
              <button className="request-demo-button hero-animate-fadeIn">
                Contact Us <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
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

export default IndustriesContent;
