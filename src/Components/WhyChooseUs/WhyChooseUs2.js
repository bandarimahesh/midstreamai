import React from "react";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";
import { Link } from "react-router-dom";
const WhyChooseUs2 = () => {
  const features = [
    "Industry Expertise & Proven Experience",
    "Industry-leading AI models trained on extensive pipeline datasets",
    "Proven expertise in regulatory compliance and operational safety",
    "High-Quality Services",
    "Experienced Professionals",
    "Customer-Centric Approach",
    "Innovative Solutions",
    "24/7 Support",
  ];
  const featureItems = [
    {
      id: 1,
      heading: "Industry Expertise & Proven Experience",
      subText:
        "Backed by 25+ years of pipeline industry experience, our team understands real-world operational challenges and delivers solutions tailored to your needs",
    },
    {
      id: 2,
      heading: "AI & Physics-Based Hybrid Models for High Accuracy",
      subText:
        "Unlike solutions that rely solely on data, our models integrate physics-based simulations with AI-driven analytics for highly accurate predictions of pipeline behavior.",
    },
    {
      id: 3,
      heading: "Real-Time Monitoring & Proactive Leak Detection",
      subText:
        "Continuous tracking of pipeline conditions using SCADA, IoT sensors, and AI-powered anomaly detection to identify leaks, pressure drops, and system inefficiencies before they escalate.",
    },
    {
      id: 4,
      heading: "Regulatory Compliance & Future-Proofed Standards",
      subText:
        "Designed to align with regulations, ensuring your pipeline operations meet all safety and environmental compliance requirements.",
    },
    {
      id: 5,
      heading: "Offshore Center of Excellence for Innovation & Support",
      subText:
        "Our Offshore Center of Excellence provides - 24/7 operational support to ensure seamless performance. Continuous R&D and innovation to keep you ahead of industry trends. Cost-effective, high-quality engineering solutions for midstream operations.",
    },
    {
      id: 6,
      heading: "End-to-End Pipeline Optimization",
      subText:
        "From leak detection to operational efficiency, MidstreamAI provides a complete suite of solutions for midstream pipeline operators.",
    },
    {
      id: 7,
      heading: "Scalable & Cloud-Ready Integration",
      subText:
        "MidstreamAI solutions seamlessly integrate with existing SCADA, IoT, and third-party applications, supporting both cloud and on-premise deployments for easy scalability.",
    },
    {
      id: 8,
      heading: "24/7 Support & Long-Term Partnership",
      subText:
        "We don’t just deliver solutions—we provide ongoing support, updates, and innovation to ensure your operations stay at the cutting edge.",
    },
  ];
  return (
    <div className="why-container container mt48 mb48">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="why-card"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="choose-us-title mb16"
        >
          Why Choose <span className="banner-highlight-color"> Us </span> ?
        </motion.h1>
        <p className="why-text">
          We provide exceptional services with a commitment to quality and
          customer satisfaction.
        </p>

        <motion.div
          className="why-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              className="why-feature-item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex align-center gap10 justify-content-center">
                <i className="fa-regular fa-circle-check why-icon"></i>
                <h3 className="why-feature-heading">{feature.heading}</h3>
              </div>
              <p className="why-feature-text">{feature.subText}</p>
            </motion.div>
          ))}
        </motion.div>
        <Link target="_blank" rel="noopener" to="/contact-us">
          <motion.button className="why-button" whileHover={{ scale: 1.03 }}>
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs2;
