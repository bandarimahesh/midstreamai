import React from "react";

const OldFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="">
          <div className="flex align-items-center jc-space-between">
            <div className="footer-brand">
              <div className="logo-box flex align-center">
                <div className="footer-logo-image-container flex align-center justify-content-center">
                  <img className="footer-logo-image" src="" alt="" />
                </div>
                <h1 className="nav-logo-title">MidstreamAI</h1>
              </div>
              <p className="footer-description hero-animate-slideUp">
                At MidstreamAI, we are dedicated to transforming midstream oil
                and gas operations through physics-based, AI-driven, and hybrid
                solutions that ensure safer, more efficient, and more reliable
                pipelines.
              </p>
            </div>

            <div className="footer-links flex">
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
                  {/* <li className="footer-li ">
                    <a className="nav-link" href="/blog">
                      Blog
                    </a>
                  </li> */}
                  {/* <li className="footer-li ">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li> */}
                  <li className="footer-li ">
                    <a className="nav-link" href="/contact-us">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="footer-section">
                <p className="footer-title">Company</p>
                <ul className="hero-animate-slideRight">
                  {" "}
                  <li className="footer-li ">
                    <a className="nav-link" href="/services">
                      Services
                    </a>
                  </li>
                  <li className="footer-li ">
                    <a className="nav-link" href="/services">
                      Products
                    </a>
                  </li>
                  <li className="footer-li ">
                    <a className="nav-link" href="/services">
                      Solutions
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="footer-section">
                <p className="footer-title">Contact Us</p>
                <ul className="contact-info hero-animate-slideRight">
                  <li>
                    <i className="fa-regular fa-envelope footer-icon"></i>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:contactus@midstreamai.com"
                      className="footer-link"
                    >
                      <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin footer-icon"></i>
                    <a
                      href="https://www.linkedin.com/company/midstreamai/"
                      className="footer-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Linkedin</span>
                    </a>
                  </li>
                  {/* <li>
                    <i className="fa-brands fa-x-twitter footer-icon"></i>
                    <a href="/" className="footer-link">
                      <span>Twitter</span>
                    </a>
                  </li> */}
                  <li>
                    <i className="fa-solid fa-location-dot footer-icon"></i>
                    <p className="footer-link location">
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
        </div>
      </div>
    </footer>
  );
};

export default OldFooter;
