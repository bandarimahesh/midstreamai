import { useState } from "react";
import "./IndustriesWithAccordion.css"; // Import the stylesheet
const Accordion = ({ title, content, isOpenInitially }) => {
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
          <ul className="content-list">
            {content.map((item, index) => (
              <li className="content-list-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
