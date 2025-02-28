import React from "react";
import RequestDemoForm from "./RequestDemoForm";
import "./ContactUs.css";
import LocateUs from "./LocateUs";
const ContactUs = () => {
  return (
    <>
      <div className="container mt48 position-relative">
        <div className="contact-title-box position-relative">
          <h1 className="main-highlight-title">
            Contact - <span className="banner-highlight-color"> Us </span>
          </h1>
          {/* <p className="service-banner-sub-text">
            Get in Touch – <span className="banner-highlight-color">We</span>'re
            Here to Help! 🚀, Your Questions, Our Answers! ✨
          </p> */}
        </div>
        <RequestDemoForm />
      </div>
      {/* <LocateUs /> */}
    </>
  );
};

export default ContactUs;
