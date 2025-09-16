// src/components/NailsTab/NailsTab.jsx
import React from 'react';
import './NailsTab.css';

const services = [
  {
    title: 'Nail Extensions',
    description: 'Achieve the perfect length and shape with our premium Nail Extension service. Expertly applied to enhance your natural nails, providing elegance and durability for special occasions or everyday glamour.',
    images: [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Acrylic Nail Enhancements',
    description: 'Our Acrylic Nail service delivers long-lasting, resilient nails with customizable designs. Ideal for clients seeking strong, stylish nails with endless possibilities of colors, shapes, and artistic flair.',
    images: [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Press-On Nail Application',
    description: 'A quick, convenient solution for beautiful nails on the go. Our high-quality Press-On Nails offer effortless application and trendy designs, perfect for those who want stunning nails without the wait.',
    images: [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Gel Nail Art & Strengthening',
    description: 'Enjoy glossy, durable Gel Nails that provide a flexible finish while strengthening your natural nails. Perfect for those desiring a long-lasting shine with vibrant designs and a professional touch.',
    images: [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const NailsTab = () => {
  return (
    <div className="nailstab-container">
      <h2 className="nailstab-heading">Our Nail Services</h2>

      <div className="nailstab-tree">
        {services.map((service, index) => (
          <div key={index} className="nailstab-branch">
            <div className="nailstab-branch-line"></div>
            <div className="nailstab-branch-node">{service.title}</div>
          </div>
        ))}
      </div>

      <div className="nailstab-details">
        {services.map((service, index) => (
          <div key={index} className="nailstab-service-card">
            <h3 className="nailstab-service-title">{service.title}</h3>
            <p className="nailstab-service-description">{service.description}</p>
            <div className="nailstab-media">
              {service.images.map((imgSrc, i) => (
                <img key={i} src={imgSrc} alt={`${service.title} ${i + 1}`} />
              ))}
              <video controls loop muted>
                <source src={service.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NailsTab;
