// src/components/ContactUs/ContactUs.jsx
import React from 'react';
import '../ContactUs/ContactUs.css';

export const ContactUs = () => (
  <section className="contact-container">
    <div className="contact-main">
      
      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <h3 className="subtitle">
          <em><strong>"Empowering Your Beauty, Elevating Your Brand!"</strong></em>
        </h3>
        <p className="contact-info-text">
          Have questions or ready to book your next appointment?<br />
          We’re here to listen, guide, and help you shine brighter.<br />
          Reach out now and let us bring beauty closer to you!<br /><br />
          This keeps it friendly, inviting, and action-oriented.<br />
          Let me know if you want it more professional, playful, or luxurious.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="contact-image">
        <img src="/ContactPageImage.png" alt="Professional contact desk setup" />
      </div>
    </div>
    
    {/* Contact Cards Section */}
    <div className="contact-cards">
      
      <div className="contact-card">
        <span className="icon">📞</span>
        <div className="card-content">
          <h4>Call Us</h4>
          <p>+91-9816522304</p>
        </div>
      </div>
      
      <div className="contact-card">
        <span className="icon">📍</span>
        <div className="card-content">
          <h4>Location</h4>
          <p>Yol Bazar, Dharmshala</p>
        </div>
      </div>
      
      <div className="contact-card">
        <span className="icon">⏰</span>
        <div className="card-content">
          <h4>Hours</h4>
          <p>10am - 6:30pm</p>
        </div>
      </div>
      
      <div className="contact-card">
        <span className="icon">📸</span>
        <div className="card-content">
          <h4>Instagram</h4>
          <p>@YourInstagramHandle</p>
        </div>
      </div>

    </div>
  </section>
);
