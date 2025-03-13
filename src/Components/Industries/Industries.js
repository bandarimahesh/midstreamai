import ServicesWithAccordion from "../Services/ServiceAccordion/ServicesWithAccordion";
import Technology from "../Services/Technology";
import IndustriesWithAccordion from "./Accordian/IndustriesWithAccordion";
import IndustriesContent from "./IndustriesContent";
import IndustriesSwiper from "./IndustriesSwiper";

const Industries = () => {
  return (
    <>
      <div className="container mt48 position-relative">
        <div className="highlight-title-box position-relative">
          <h1 className="main-highlight-title">
            Industries - <span className="banner-highlight-color"> We </span>{" "}
            Serve
          </h1>
        </div>
        <IndustriesSwiper />
      </div>
      <IndustriesContent />
      <IndustriesWithAccordion />
      {/* <Technology /> */}
    </>
  );
};

export default Industries;
