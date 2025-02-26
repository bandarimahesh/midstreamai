import React from "react";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";
import { Link } from "react-router-dom";
const WhyChooseUs2 = () => {
  const features = [
    "Scalable and cloud-integrated solutions",
    "Industry-leading AI models trained on extensive pipeline datasets",
    "Proven expertise in regulatory compliance and operational safety",
    "High-Quality Services",
    "Experienced Professionals",
    "Customer-Centric Approach",
    "Innovative Solutions",
    "24/7 Support",
  ];

  return (
    <div className="why-container container">
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="why-feature-item"
              whileHover={{ scale: 1.02 }}
            >
              <i className="fa-regular fa-circle-check why-icon"></i>
              <span className="why-feature-text">{feature}</span>
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
