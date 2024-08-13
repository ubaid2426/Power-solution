import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactform.css"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="contact-main">

   <div className="form1"><span>
   Send us a message today</span></div>
    <form onSubmit={handleSubmit} className="form2">
      <div className="g1">
        <div className="first">
          <label className="sty" htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="last">
          <label className="sty" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email-id">
          <label className="sty" htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="subject-id">
          <label className="sty" htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="g2">
        {" "}
        <div className="message-id">
          <label className="sty" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      
    </form>
    <div className="form3"><button type="submit">Send</button></div>
    </div>
  );
};

export default ContactForm;
