import "./Accordion.css"; // Import the stylesheet
const Accordion = ({ title, content, isOpenInitially }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header">{title}</button>
      <div className="accordion-content">
        <ul className="content-list">
          {content.map((item, index) => (
            <li className="content-list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
