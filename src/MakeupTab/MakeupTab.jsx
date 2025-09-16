// src/components/MakeupTab/MakeupTab.jsx
import React from 'react';
import './MakeupTab.css';

const services = [
  {
    title: 'Flawless Airbrush Makeup',
    description: 'Achieve a perfectly smooth, photo-ready complexion with our Flawless Airbrush Makeup. Utilizing advanced airbrush technology, this service delivers an even, long-lasting finish ideal for photoshoots, weddings, and special events where picture-perfect results are essential.',
    images: [
      'https://via.placeholder.com/300x200?text=Air+Brush+1',
      'https://via.placeholder.com/300x200?text=Air+Brush+2',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Crystal-Clear HD Makeup',
    description: 'Our Crystal-Clear HD Makeup is specially crafted for high-definition cameras, ensuring every feature is enhanced naturally yet impeccably. Perfect for film, television, and professional events, it provides a radiant, camera-friendly look without any harsh lines or imperfections.',
    images: [
      'https://via.placeholder.com/300x200?text=HD+Makeup+1',
      'https://via.placeholder.com/300x200?text=HD+Makeup+2',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Everyday Elegance Makeup',
    description: 'Everyday Elegance Makeup offers a subtle yet sophisticated enhancement of your natural beauty, perfect for daily wear or casual occasions. Lightweight and long-lasting, this service emphasizes a fresh, clean look to keep you confident all day.',
    images: [
      'https://via.placeholder.com/300x200?text=Normal+Makeup+1',
      'https://via.placeholder.com/300x200?text=Normal+Makeup+2',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    title: 'Radiant Bridal Glow Makeup',
    description: 'Celebrate your special day with our Radiant Bridal Glow Makeup, designed to make you look stunning and feel confident. Long-lasting and meticulously applied, it enhances your best features while ensuring you shine in every photo, from the ceremony to the last dance.',
    images: [
      'https://via.placeholder.com/300x200?text=Bridal+Makeup+1',
      'https://via.placeholder.com/300x200?text=Bridal+Makeup+2',
    ],
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const MakeupTab = () => {
  return (
    <div className="makeup-tab">
      <h2 className="makeup-tab__title">Explore Our Makeup Services</h2>

      <div className="makeup-tab__mindmap">
        <div className="mindmap-center">Makeup Services</div>
        {services.map((service, index) => (
          <div key={index} className={`mindmap-node node-${index + 1}`}>
            {service.title}
          </div>
        ))}
      </div>

      <div className="makeup-tab__services">
        {services.map((service, index) => (
          <div className="makeup-tab__service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="makeup-tab__media">
              <img src={service.images[0]} alt={`${service.title} Image 1`} />
              <img src={service.images[1]} alt={`${service.title} Image 2`} />
              <video controls>
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

export default MakeupTab;
