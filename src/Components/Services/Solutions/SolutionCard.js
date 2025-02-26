import React from "react";
import "./Solutions.css";
import SolImage1 from "../../../Assets/Services/Solutions1.jpg";
import SolImage2 from "../../../Assets/Services/Solutions2.cms";
import SolImage3 from "../../../Assets/Services/Solutions3.jpg";
import SolImage4 from "../../../Assets/Services/Solutions4.jpg";
const Card = ({ image, text, bgColor }) => {
  return (
    <div className={`solution-card ${bgColor}`}>
      <img src={image} alt="Card" className="solution-card-image" />
      <div className="solution-card-overlay">
        <h2 className="solution-card-text">{text}</h2>
      </div>
    </div>
  );
};
const SolutionCardGrid = () => {
  const cards = [
    {
      image: SolImage1,
      text: "Leak Detection",
      bgColor: "bg-blue",
    },
    {
      image: SolImage2,
      text: "Batch Tracking",
      bgColor: "bg-green",
    },
    {
      image: SolImage3,
      text: "Operator Training Simulator",
      bgColor: "bg-purple",
    },
    {
      image: SolImage4,
      text: "Product Compatibility",
      bgColor: "bg-red",
    },
  ];

  return (
    <div className="solution-card-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default SolutionCardGrid;
