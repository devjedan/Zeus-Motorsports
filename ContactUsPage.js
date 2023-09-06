import React from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <section className="contact-us-page">
      <div className="contact-us-content">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-us-description">We'd love to hear from you. Feel free to reach out to our team with any inquiries or feedback.</p>
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsPage;
