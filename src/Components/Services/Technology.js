import React from "react";
import "./Technology.css";
const techStack = [
  {
    title: "Machine Learning & AI",
    description: "Predictive modeling for leaks, failures, and optimization",
  },
  {
    title: "Big Data Analytics",
    description: "Processing millions of data points for real-time insights",
  },
  {
    title: "Cloud Integration",
    description: "Secure, scalable solutions for any infrastructure",
  },
  {
    title: "SCADA & IoT Integration",
    description: "Seamless connectivity with existing pipeline systems",
  },
];

const securityStack = [
  {
    title: "Data Encryption & Secure Access",
    description: "",
  },
  {
    title: "Regulatory-Compliant Architecture",
    description: "",
  },
  {
    title: "Auditable Logs for Transparent Operations",
    description: "",
  },

  {
    title: "Regulatory-Compliant Architecture",
    description: "",
  },
];
function Technology() {
  return (
    <div className="technology-background">
      <div className="highlight-title-box position-relative">
        <h1 className="main-highlight-title">
          Technologies - <span className="banner-highlight-color"> We </span>{" "}
          Use
        </h1>
      </div>
      <div className="container mt48 mb32">
        <div className="flex align-center justify-content-center">
          <div className="flex gap30">
            {/* AI & Analytics Stack */}
            <div className="first-item">
              <h2>Our AI & Analytics Stack</h2>
              <div className="grid">
                {techStack.map((item, index) => (
                  <div key={index} className="card">
                    <h3 className="blue-text">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-right"></div>
            {/* Security & Compliance */}
            <div className="second-item">
              <h2 className="mt-10">Security & Compliance</h2>
              <div className="grid">
                {securityStack.map((item, index) => (
                  <div key={index} className="card">
                    <h3 className="red-text">{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
