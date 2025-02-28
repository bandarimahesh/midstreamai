import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
// import Services from "../Components/Services/ServicesCopy/Services copy";
import Services from "../Components/Services/Services";

import GoToTop from "../Components/Utils/GoToTop";

const ServicesPage = () => {
  document.title = "MidstreamAI | Services";

  return (
    <>
      <Navbar />
      <Services />
      <Footer /> <GoToTop />
    </>
  );
};

export default ServicesPage;
