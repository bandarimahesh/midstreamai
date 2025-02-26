import React, { useState } from "react";
import "./Utils.css";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="scroll-top-button"
      onClick={scrollToTop}
      style={{ display: visible ? "" : "none" }}
    >
      <i className="fa-solid fa-arrow-up fa-2xs" style={{ color: "#66d67a" }}></i>{" "}
    </button>
  );
};

export default ScrollButton;
