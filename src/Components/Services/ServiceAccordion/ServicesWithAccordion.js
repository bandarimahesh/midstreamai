import React from "react";
import {
  LeakedData,
  ProductCompatibilityData,
  commercialBatchManagementData,
  OperatorTrainingSImulator,
} from "../../Data/ServicesAccordianData";
import Accordion from "./Accordion";
const ServicesWithAccordion = () => {
  return (
    <div className="container mt32 mb32">
      <div className="accordion-content-box mt16">
        <div className="accordion-box">
          <div className="accordion-title-box">
            <h1 className="accordion-title">Leak Detection</h1>
          </div>
          <div className="accordion-container">
            {LeakedData?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                solutionHeading={item.solutionHeading}
                category={item.category}
                description={item.description}
                pipelineOperation={item.pipelineOperation}
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
            <h1 className="accordion-title">Product Compatibility</h1>
          </div>
          <div className="accordion-container">
            {ProductCompatibilityData?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                solutionHeading={item.solutionHeading}
                category={item.category}
                description={item.description}
                pipelineOperation={item.pipelineOperation}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="accordion-content-box mt32">
        <div className="accordion-box">
          <div className="accordion-title-box">
            <h1 className="accordion-title">Commercial Batch Management</h1>
          </div>
          <div className="accordion-container">
            {commercialBatchManagementData?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                solutionHeading={item.solutionHeading}
                category={item.category}
                description={item.description}
                pipelineOperation={item.pipelineOperation}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-content-box mt32 mb32">
        <div className="accordion-box">
          <div className="accordion-title-box">
            <h1 className="accordion-title">Operator Training Simulator</h1>
          </div>
          <div className="accordion-container">
            {OperatorTrainingSImulator?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                solutionHeading={item.solutionHeading}
                category={item.category}
                description={item.description}
                pipelineOperation={item.pipelineOperation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWithAccordion;
