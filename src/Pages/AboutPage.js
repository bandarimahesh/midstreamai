import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import GoToTop from "../Components/Utils/GoToTop";

const AboutPage = () => {
  document.title = "MidstreamAI | About us";

  return (
    <>
      <Navbar />
      <About />
      <Footer /> <GoToTop />
    </>
  );
};

export default AboutPage;
