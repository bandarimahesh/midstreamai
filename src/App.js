import "./App.css";
import "./CSS/SwipereStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollButton from "./Components/Utils/ScrollToTop";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import IndustriesPage from "./Pages/IndustriesPage";
import ServicesPage from "./Pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import FadingDots from "./Components/LoadingAnimations/FadingDots";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollButton />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/loading" element={<FadingDots />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
