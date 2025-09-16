import React from 'react';
import './SkinTab.css';

const services = [
  {
    title: 'Radiance Facial Treatments',
    description:
      'Experience the ultimate skin rejuvenation with our Radiance Facial Treatments. Designed to deeply hydrate, cleanse, and revitalize your skin, these facials restore your natural glow, combat dullness, and leave your complexion radiant and refreshed.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
    types: [
      {
        name: 'Hydra Facial Therapy',
        description:
          'Hydra Facial Therapy deeply cleanses, exfoliates, and hydrates your skin using advanced technology, leaving it glowing and smooth.',
        images: ['https://via.placeholder.com/250x150', 'https://via.placeholder.com/250x150'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        name: 'Deep Cleanse Facial',
        description:
          'Our Deep Cleanse Facial removes impurities and unclogs pores, promoting healthy and radiant skin.',
        images: ['https://via.placeholder.com/250x150', 'https://via.placeholder.com/250x150'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
  },
  {
    title: 'Silken Waxing Solutions',
    description:
      'Our Silken Waxing Solutions provide expert hair removal using gentle yet effective techniques, ensuring smooth, hair-free skin with minimal discomfort.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
    types: [
      {
        name: 'Delicate Face Wax',
        description: 'Gentle waxing for delicate facial areas, leaving skin smooth and refreshed.',
        images: ['https://via.placeholder.com/250x150', 'https://via.placeholder.com/250x150'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        name: 'Smooth Full Body Wax',
        description: 'Complete hair removal for the entire body for silky-smooth results.',
        images: ['https://via.placeholder.com/250x150', 'https://via.placeholder.com/250x150'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
  },
  {
    title: 'Luxurious Manicure & Pedicure',
    description:
      'Indulge in our Luxurious Manicure & Pedicure service, where expert nail care meets pampering treatments.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
    types: [], // No types
  },
  {
    title: 'Holistic Body Massages',
    description:
      'Relax and rejuvenate with our Holistic Body Massages designed to relieve stress, improve circulation, and promote overall well-being.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
    types: [], // No types
  },
];

const SkinTab = () => (
  <section className="skintab-container">
    <h1 className="skintab-heading">🌸 Our Skin Care Services 🌸</h1>

    {/* Service Showcase */}
    <div className="skintab-showcase">
      {services.map((service, index) => (
        <div key={index} className="skintab-showcase-card fade-in">
          <h3>{service.title}</h3>
        </div>
      ))}
    </div>

    {/* Detailed Services */}
    <div className="skintab-detailed-services">
      {services.map((service, index) => (
        <div key={index} className="skintab-detailed-card zoom-in">
          {/* Main Service Images */}
          <div className="skintab-images">
            {service.images.map((imgSrc, imgIdx) => (
              <img key={imgIdx} src={imgSrc} alt={`${service.title} ${imgIdx + 1}`} />
            ))}
          </div>

          {/* Main Service Title & Description */}
          <h2>{service.title}</h2>
          <p className="centered-text">{service.description}</p>

          {/* Service Types as Headings */}
          {service.types.length > 0 &&
            service.types.map((type, idx) => (
              <div key={idx} className="skintab-type-card fade-in">
                <h3 className="skintab-type-title">{type.name}</h3>
                <div className="skintab-images">
                  {type.images.map((img, imgIdx) => (
                    <img key={imgIdx} src={img} alt={`${type.name} ${imgIdx + 1}`} />
                  ))}
                </div>
                <video className="skintab-video" controls src={type.video} />
                <p className="centered-text">{type.description}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  </section>
);

export default SkinTab;
