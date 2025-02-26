import React from "react";
import "../Services.css";
import Accordion from "./Accordion";
import Technology from "../../Services/Technology";
import { integrityData, maintenanceData, operationData } from "../../Data/Data";
const Services2 = () => {
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
      <section className="services-banner">
        <div className="services-overlay"></div>
        <div className="about-banner-content">
          <h1>
            Services <span className="banner-highlight-color"> We </span> Offer
          </h1>
          <p>
            A breakdown of solutions Midstream
            <span className="banner-highlight-color">AI</span> offers under
            different categories
          </p>
        </div>
      </section>
      <div className="container mt32 mb48">
        <div className="flex align-items-center gap30">
          {servicesData?.map((item, index) => (
            <div key={index} className="services-card">
              <h1 className="blue-text">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt32 mb32">
        <div className="accordion-content-box mt16">
          <div className="accordion-box">
            <div className="accordion-title-box">
              <h1 className="accordion-title">Pipeline Integrity & Safety</h1>
            </div>
            <div className="accordion-container">
              {integrityData?.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpenInitially={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="accordion-content-box mt32">
          <div className="accordion-box">
            <div className="accordion-title-box">
              <h1 className="accordion-title">Operational Optimization</h1>
            </div>
            <div className="accordion-container">
              {operationData?.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="accordion-content-box mt32">
          <div className="accordion-box">
            <div className="accordion-title-box">
              <h1 className="accordion-title">
                Predictive Maintenance & Reliability
              </h1>
            </div>
            <div className="accordion-container">
              {maintenanceData?.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Technology />
    </>
  );
};

export default Services2;
