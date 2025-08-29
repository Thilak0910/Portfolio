import React, { useState, useEffect } from "react";
import "./ContactForm.css";
import { contactFormInfo } from "../../portfolio";
import emailjs from "emailjs-com";
debugger;
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    debugger;
    // Initialize EmailJS with your user ID
    if (
      contactFormInfo.emailjs.userId &&
      contactFormInfo.emailjs.userId !== "YOUR_USER_ID"
    ) {
      emailjs.init(contactFormInfo.emailjs.userId);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is properly configured

    if (
      !contactFormInfo.emailjs.serviceId ||
      !contactFormInfo.emailjs.templateId ||
      !contactFormInfo.emailjs.userId ||
      contactFormInfo.emailjs.serviceId === "YOUR_SERVICE_ID" ||
      contactFormInfo.emailjs.templateId === "YOUR_TEMPLATE_ID" ||
      contactFormInfo.emailjs.userId === "YOUR_USER_ID"
    ) {
      console.error(
        "EmailJS is not properly configured. Please update your EmailJS credentials in portfolio.js"
      );
      setSubmitStatus("config-error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Using EmailJS service to send emails directly from the client-side
      // You'll need to sign up at emailjs.com and add your service ID, template ID, and user ID
      const response = await emailjs.send(
        contactFormInfo.emailjs.serviceId,
        contactFormInfo.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: contactFormInfo.emailjs.receiverEmail,
        },
        contactFormInfo.emailjs.userId
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">{contactFormInfo.title}</h2>
      <p className="contact-form-subtitle">{contactFormInfo.subtitle}</p>

      {submitStatus === "success" && (
        <div className="success-message">
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="error-message">
          <p>Oops! Something went wrong. Please try again later.</p>
        </div>
      )}

      {submitStatus === "config-error" && (
        <div className="error-message">
          <p>
            EmailJS is not properly configured. Please update your EmailJS
            credentials in portfolio.js file.
          </p>
          <p className="setup-note">
            To set up EmailJS: 1) Create an account at emailjs.com, 2) Create a
            service and template, 3) Update the credentials in portfolio.js
          </p>
        </div>
      )}

      {(contactFormInfo.emailjs.serviceId === "YOUR_SERVICE_ID" ||
        contactFormInfo.emailjs.templateId === "YOUR_TEMPLATE_ID" ||
        contactFormInfo.emailjs.userId === "YOUR_USER_ID") && (
        <div className="setup-message">
          <p>
            This contact form requires EmailJS configuration to work properly.
          </p>
          <p>To set up EmailJS:</p>
          <ol>
            <li>
              Create an account at{" "}
              <a
                href="https://www.emailjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                emailjs.com
              </a>
            </li>
            <li>Create an Email Service (Gmail, Outlook, etc.)</li>
            <li>Create an Email Template</li>
            <li>Update the credentials in portfolio.js file</li>
          </ol>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message (max 1000 characters)"
            maxLength={1000}
            required
            rows={5}
          ></textarea>
          <div className="character-count">
            {formData.message.length}/1000 characters
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
