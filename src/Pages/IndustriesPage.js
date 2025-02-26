import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Industries from "../Components/Industries/Industries";
import GoToTop from "../Components/Utils/GoToTop";

const IndustriesPage = () => {
  document.title = "MidstreamAi | Industries";

  return (
    <>
      <Navbar />
      <Industries />
      <Footer /> <GoToTop />
    </>
  );
};

export default IndustriesPage;
