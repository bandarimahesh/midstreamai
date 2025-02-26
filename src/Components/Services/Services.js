import React from "react";
import "./Services.css";
import Technology from "./Technology";
import ServicesWithAccordion from "./ServiceAccordion/ServicesWithAccordion";
import ServicesSwiper from "./ServiceSwiper/ServicesSwiper";
const Services = () => {
  const servicesData = [
    {
      title: " Leak Detection",
    },
    {
      title: "Batch Tracking",
    },
    {
      title: "Operator Training Simulator",
    },
    {
      title: "Product Compatibility",
    },
  ];
  return (
    <>
      <div className="container mt48 position-relative">
        <div className="highlight-title-box position-relative">
          <h1 className="main-highlight-title">
            Services - <span className="banner-highlight-color"> We </span>
            Offer
          </h1>
          <p className="service-banner-sub-text">
            A breakdown of solutions Midstream
            <span className="banner-highlight-color">AI</span> offers under
            different categories
          </p>
        </div>
        <ServicesSwiper />
      </div>
      {/* <section className="container">
        <div className="services-banner">
          <div className="services-overlay"></div>
          <div className="about-banner-content">
            <h1>
              Services <span className="banner-highlight-color"> We </span>{" "}
              Offer
            </h1>
            <p>
              A breakdown of solutions Midstream
              <span className="banner-highlight-color">AI</span> offers under
              different categories
            </p>
          </div>
        </div>
      </section> */}
      <ServicesWithAccordion />
      {/* <Technology /> */}
    </>
  );
};

export default Services;
