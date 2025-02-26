import { useState } from "react";
import ContactImage from "../../Assets/Contact-image.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";

export default function RequestDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = "service_uxbhxhp";
    const templateID = "template_ykp37xs";
    const userID = "WC9fTTYjMb79ExOKT";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your request has been submitted!");
      })
      .catch((error) => {
        console.error("Failed to send email", error);
        alert("Failed to send request. Please try again.");
      });
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-image">
          <img src={ContactImage} alt="Contact" />
        </div>
        <div className="form-content ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <PhoneInput
                country={"us"}
                value={formData.mobile}
                onChange={handlePhoneChange}
                inputClass="phone-input"
                containerClass="phone-container"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="8"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
