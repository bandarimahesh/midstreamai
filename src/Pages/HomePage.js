import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import HighlightCard1 from "../Components/Highlights/HighlightCard1";
import GoToTop from "../Components/Utils/GoToTop";
import WhyChooseUs2 from "../Components/WhyChooseUs/WhyChooseUs2";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <HighlightCard1 />
      <WhyChooseUs2 />
      <Footer />
      <GoToTop />
    </>
  );
};

export default HomePage;
