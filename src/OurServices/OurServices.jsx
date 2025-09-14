import React from 'react';
import { Link } from 'react-router-dom';
import '../OurServices/OurServices.css';

const OurServices = () => {
  const services = [
    {
      category: "Hair Care & Styling",
      iconSrc: "/HairCareImage.jpg",
      alt: "Hair icon",
      path: "/hairartistry",
    },
    {
      category: "Skin Care Solutions",
      iconSrc: "/SkinCareImage.jpg",
      alt: "Skin icon",
      path: "/skinartistry",
    },
    {
      category: "Nails & Manicure",
      iconSrc: "/NailsImage.jpg",
      alt: "Nails icon",
      path: "nailsartistry",
    },
    {
      category: "Makeup Artistry",
      iconSrc: "/MakeUpImage.jpg",
      alt: "Makeup icon",
      path: "/makeupartistry",
    },
  ];

  return (
    <section className="services-page-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map(({ category, iconSrc, alt, path }) => (
          <Link key={category} to={path} className="service-card-link">
            <div className="service-card">
              <div className="service-icon">
                <img src={iconSrc} alt={alt} />
              </div>
              <h3 className="service-category">{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
