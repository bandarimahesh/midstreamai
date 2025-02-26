import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Services from "../Components/Services/ServicesCopy/Services copy";

import GoToTop from "../../Utils/GoToTop";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Services />
      <Footer /> <GoToTop />
    </>
  );
};

export default ServicesPage;
