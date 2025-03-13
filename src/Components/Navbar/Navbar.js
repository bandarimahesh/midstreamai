import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import LogoIcon from "../../Assets/Midstream AI _ Logo Icon.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 70) {
      setVisible(true);
    } else if (scrolled <= 70) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  console.log(window.screen.width);
  return (
    <header>
      <nav className={visible ? " navbar active" : "navbar"}>
        <div className="container">
          <div className="row ptb8">
            <div className="flex align-center jc-space-between">
              <div className="logo">
                <Link to="/">
                  <div className="logo-box flex align-center">
                    <div className="logo-image-container flex align-center justify-content-center">
                      <img className="logo-image" src={LogoIcon} alt="" />
                    </div>
                    <h1 className="nav-logo-title">MidstreamAI</h1>
                  </div>
                  {/* <img className="logo-image" src={Logo} alt="Logo" /> */}
                </Link>
              </div>
              <div className="menu ">
                <div className="menu-items">
                  <ul className="menu-ul flex align-center jc-space-between">
                    <li className="menu-li">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-li">
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="menu-li">
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="menu-li hide">
                      <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="menu-li">
                      <NavLink
                        to="/industries"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        Industries
                      </NavLink>
                    </li>
                    <li className="menu-li hide">
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="menu-li hide">
                      <NavLink
                        to="/career"
                        className={({ isActive }) =>
                          isActive ? "nav-link nav-active" : "nav-link "
                        }
                      >
                        Career
                      </NavLink>
                    </li>
                    <li className="menu-li">
                      <a className="contact-button" href="/contact-us">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
