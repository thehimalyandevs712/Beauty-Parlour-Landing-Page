// Home.jsx or wherever this component is used
import React from 'react';
import './Home.css';
import { Outlet } from 'react-router-dom';

const OurServices = ({ services }) => (
  <section className="services-container" id="our-services">
    <h2 className="services-heading">Our Services</h2>
    <div className="services-grid">
      {services.map(({ category, iconSrc, alt }) => (
        <div key={category} className="service-card">
          <div className="service-icon">
            <img src={iconSrc} alt={alt} />
          </div>
          <h3 className="service-category">{category}</h3>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {
  const services = [
    {
      category: "Hair Care & Styling",
      iconSrc: "/HairCareImage.jpg", // update with actual paths to images
      alt: "Hair icon",
    },
    {
      category: "Skin Care Solutions",
      iconSrc: "/SkinCareImage.jpg",
      alt: "Skin icon",
    },
    {
      category: "Nails & Manicure",
      iconSrc: "/NailsImage.jpg",
      alt: "Nails icon",
    },
    {
      category: "Makeup Artistry",
      iconSrc: "/MakeUpImage.jpg",
      alt: "Makeup icon",
    },
  ];

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
            At Seema Beauty Salon, we offer professional haircuts, styling, skincare treatments, and more to help you look and feel your best every day.
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

      <OurServices services={services} />
    </>
  );
};

export default Home;
