// Home.jsx
import React from 'react';
import "../Home/Home.css"
import { Outlet } from 'react-router-dom';
import OurServices from '../OurServices/OurServices';

const Home = () => {
  return (
    <>
      <section className="home-container" id="home">
        {/* Bubble background */}
        <div className="bubble-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`bubble bubble-${i + 1}`}></div>
          ))}
        </div>

        <div className="home-image-wrap">
          <img src="/FrontImage.jpg" alt="Model sitting" className="home-model-image" />
          <div className="home-image-overlay">
            <div className="gold-cross-horizontal" />
            <div className="gold-cross-vertical" />
          </div>
        </div>

        <div className="home-content">
          <h4 className="home-subheading">Welcome to Seema Beauty Salon</h4>
          <h1 className="home-title">Unleash Your Radiance</h1>
          <p className="home-desc">
            You deserve to look and feel your best.
            <br></br>
            We combine expert care, creative style, and a seamless digital experience to help you shine, inside and out.
            Because your confidence is our passion.
          </p>
          <form className="home-form">
            <input type="email" className="home-form-input" placeholder="Search Here....." />
            <button type="submit" className="home-form-btn">🔍</button>
          </form>
          <div className="home-social">
            <span className="home-social-icon">◉</span>
            <span className="home-social-icon">◉</span>
            <span className="home-social-label">Seema Beauty Salon</span>
          </div>
        </div>

        <img src={""} alt="" className="home-leaves home-leaves-right" />
        <img src={""} alt="" className="home-leaves home-leaves-bottom" />
        <div className="home-corner-deco" />
        <div className="home-dot-deco" />

        <Outlet />
      </section>
      <OurServices></OurServices>
    </>
  );
};

export default Home;
