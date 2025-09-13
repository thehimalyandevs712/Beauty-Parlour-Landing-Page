import React from "react";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="cs-contact-wrap">
      <div className="cs-contact-img">
        <img src="/FrontImage.jpg" alt="Contact Reference" />
      </div>
      <div className="cs-contact-card">
        <h1 className="cs-contact-title">Contact Us Page</h1>
        <div className="cs-contact-inner">
          <form className="cs-contact-form">
            <input className="cs-input" type="text" placeholder="Full Name" />
            <input className="cs-input" type="email" placeholder="E-mail" />
            <textarea className="cs-textarea" placeholder="Message" />
            <button className="cs-btn" type="submit">Contact Us</button>
          </form>
          <div className="cs-contact-info">
            <div className="cs-info-item">
              <span className="cs-info-heading">Contact</span>
              <p className="cs-info-text">hi@fashion.com</p>
            </div>
                <div className="cs-info-item">
              <span className="cs-info-heading">Contact Number</span>
              <p className="cs-info-text">749</p>
            </div>
            <div className="cs-info-item">
              <span className="cs-info-heading">Based in</span>
              <p className="cs-info-text">
                Yol Bazar,
                <br />
                Dharamshala
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

 
