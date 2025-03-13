import React from "react";
import Logo from "../../Assets/Logo.svg";
import "./Footer.css";
import LogoIcon from "../../Assets/Midstream AI _ Logo Icon.svg";

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex align-items-center jc-space-between">
        <div className="footer-brand">
          <div className="logo-box flex align-center">
            <div className="footer-logo-image-container flex align-center justify-content-center">
              <img className="footer-logo-image" src={LogoIcon} alt="" />
            </div>
            <h1 className="nav-logo-title">MidstreamAI</h1>
          </div>
          <p className="footer-description hero-animate-slideUp">
            At MidstreamAI, we are dedicated to transforming midstream oil and
            gas operations through AI-driven, physics-based, AI and hybrid
            solutions that ensure safer, more efficient, and more reliable
            pipelines.
          </p>
        </div>
        <div className="footer-link-box">
          <div className="flex align-items-center jc-space-between">
            <div className="footer-section">
              <p className="footer-title">Quick Links</p>
              <ul className="hero-animate-slideRight">
                <li className="footer-li ">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>

                <li className="footer-li ">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="footer-li ">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="footer-li ">
                  <a className="nav-link" href="/services">
                    Industries
                  </a>
                </li>
                <li className="footer-li ">
                  <a className="nav-link" href="/contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <p className="footer-title">Contact Us</p>
              <ul className="contact-info hero-animate-slideRight">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:contactus@midstreamai.com"
                    className="footer-link"
                  >
                    <i className="fa-regular fa-envelope footer-icon"></i>
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/midstreamai/"
                    className="footer-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i className="fa-brands fa-linkedin footer-icon"></i>
                    <span>Linkedin</span>
                  </a>
                </li>

                <li>
                  <i className="fa-solid fa-location-dot footer-icon"></i>
                  <p className="footer-link">
                    <span>
                      MidstreamAI LLC, <br />
                      Sugar Land, <br />
                      TX 77479, USA
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-conten">
          <p className="copyright">
            <span> All rights reserved. &copy; 2024 MidstreamAI </span>
            {/* <a className="company-tc" href="#">
                  Terms & Conditions
                </a>
                <span className="separator">•</span>
                <a href="#">Privacy Policy</a> */}
          </p>
          {/* <p className="company-copyright">&copy; 2022 MidstreamAI</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
