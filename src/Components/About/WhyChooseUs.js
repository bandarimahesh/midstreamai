import "./WhyChooseUs.css";
import Image1 from "../../Assets/About/1.jpg";
import Image2 from "../../Assets/About/2.jpg";
import Image3 from "../../Assets/About/3.jpg";
const WhyChooseUs = () => {
  const points = [
    {
      text: "Industry-leading AI models trained on extensive pipeline datasets",
      image: Image1,
    },
    {
      text: "Scalable and cloud-integrated solutions",
      image: Image2,
    },
    {
      text: "Proven expertise in regulatory compliance and operational safety",
      image: Image3,
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h1 className="choose-us-title">
          Why Choose <span className="banner-highlight-color"> Us </span>?
        </h1>
        <div className="choose-us-content-container">
          {points.map((point, index) => (
            <div
              key={index}
              className={`choose-us-content-box  ${
                index % 2 === 0
                  ? "row-normal margin-auto"
                  : "row-reverse margin-auto"
              }`}
            >
              <img
                src={point.image}
                alt={point.text}
                className="choose-us-content-image"
              />
              <div className="choose-us-content-text">
                <i className="fa-regular fa-circle-check why-icon"></i>
                <p>{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
