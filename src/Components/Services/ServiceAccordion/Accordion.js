import { useState } from "react";
import "./Accordion.css"; // Import the stylesheet
const Accordion = ({
  title,
  solutionHeading,
  category,
  description,
  pipelineOperation,
  isOpenInitially,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <div className="content-list">
            <div className="flex align-center">
              <h4 className="accordion-content-heading"> Category : </h4>
              <p className="category-title"> {" " + category}</p>
            </div>
            <h4 className="accordion-content-heading">Description :</h4>
            <p className="service-content-list-item">{description}</p>
            <h4 className="accordion-content-heading">
              How It Helps Pipeline Operations :
            </h4>
            <p className="content-list-item">{pipelineOperation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
