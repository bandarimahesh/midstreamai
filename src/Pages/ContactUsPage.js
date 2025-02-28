import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/ContactUs/ContactUs";
import GoToTop from "../Components/Utils/GoToTop";
const ContactUsPage = () => {
  document.title = "MidstreamAI | Contact us";

  return (
    <>
      <Navbar />
      <ContactUs />
      <Footer /> <GoToTop />
    </>
  );
};

export default ContactUsPage;
