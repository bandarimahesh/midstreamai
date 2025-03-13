import React from "react";
import { integrityData, maintenanceData, operationData } from "../../Data/Data";
import Accordion from "./IndustriesAccordion";
const IndustriesWithAccordion = () => {
  return (
    <div className="container mb32">
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
      <div className="accordion-content-box mt32 mb32">
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
  );
};

export default IndustriesWithAccordion;
