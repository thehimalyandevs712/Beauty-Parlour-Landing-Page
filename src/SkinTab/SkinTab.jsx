// src/components/SkinTab/SkinTab.jsx
import React from 'react';
import './SkinTab.css';

const services = [
  {
    title: 'Radiance Facial Treatments',
    types: ['Hydra Facial Therapy', 'Deep Cleanse Facial'],
    description: 'Experience the ultimate skin rejuvenation with our Radiance Facial Treatments. Designed to deeply hydrate, cleanse, and revitalize your skin, these facials restore your natural glow, combat dullness, and leave your complexion radiant and refreshed.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
  },
  {
    title: 'Silken Waxing Solutions',
    types: ['Delicate Face Wax', 'Smooth Full Body Wax'],
    description: 'Our Silken Waxing Solutions provide expert hair removal using gentle yet effective techniques, ensuring smooth, hair-free skin with minimal discomfort. Perfect for sensitive skin, our treatments leave your body silky smooth and refreshed.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
  },
  {
    title: 'Luxurious Manicure & Pedicure',
    types: [],  // No types here
    description: 'Indulge in our Luxurious Manicure & Pedicure service, where expert nail care meets pampering treatments. From shaping and polishing to moisturizing and cuticle care, your nails will be healthy, well-groomed, and strikingly beautiful.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
  },
  {
    title: 'Holistic Body Massages',
    types: [],  // No types here
    description: 'Relax and rejuvenate with our Holistic Body Massages designed to relieve stress, improve circulation, and promote overall well-being. Our skilled therapists use expert techniques to harmonize your body and mind, leaving you refreshed and revitalized.',
    images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'],
  },
];

const SkinTab = () => (
  <section className="skintab-container">
    <h1 className="skintab-heading">🌸 Our Skin Care Services 🌸</h1>

    {/* Services Overview */}
    <div className="skintab-services-overview">
      {services.map((service, index) => (
        <div key={index} className="skintab-service-card fade-in">
          <h3>{service.title}</h3>
        </div>
      ))}
    </div>

    {/* Flowchart Section */}
    <div className="skintab-flowchart">
      {services.map((service, index) => (
        <div key={index} className="skintab-flow-node slide-in">
          <h4>{service.title}</h4>
          {service.types.length > 0 && (
            <ul>
              {service.types.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>

    {/* Detailed Services */}
    <div className="skintab-detailed-services">
      {services.map((service, index) => (
        <div key={index} className="skintab-detailed-card zoom-in">
          <div className="skintab-images">
            {service.images.map((imgSrc, imgIdx) => (
              <img key={imgIdx} src={imgSrc} alt={`${service.title} ${imgIdx + 1}`} />
            ))}
          </div>
          <h2>{service.title}</h2>
          <p className="centered-text">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SkinTab;
