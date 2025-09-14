import React from "react";
import '../SkinTab/SkinTab.css';

const mainServices = [
  { name: "Facial", icon: "/images/facial-icon.png" },
  { name: "Waxing", icon: "/images/waxing-icon.png" },
  { name: "Manicure & Pedicure", icon: "/images/manicure-icon.png" },
  { name: "Body Massage", icon: "/images/massage-icon.png" }
];

const serviceDetails = [
  {
    title: "Facial",
    types: [
      { type: "Hydra Facial", description: "Utilizes patented technology for deep cleansing, exfoliation, extraction, hydration, and antioxidant protection, promoting clearer, more beautiful skin." },
      { type: "Face Cleanup", description: "Manual extraction of blackheads, whiteheads, and dead skin cells to improve skin texture and glow." }
    ],
    image: "/images/facial.jpg",
    description: "Our facial treatments are customized to suit every skin type, providing anti-aging, moisturizing, and deep-cleansing benefits. Hydra Facial is perfect for those seeking quick yet intensive care, while Face Cleanup focuses on thorough skin purification."
  },
  {
    title: "Waxing",
    types: [
      { type: "Full Body Waxing", description: "Comprehensive hair removal service covering legs, arms, back, chest, and more for a smooth, hair-free experience." },
      { type: "Leg Waxing", description: "Expert waxing for both upper and lower legs using gentle products, ensuring minimal irritation." },
      { type: "Arm Waxing", description: "Removes fine and coarse hair, leaving arms silky smooth and refreshed." },
      { type: "Underarm Waxing", description: "Clean and safe hair removal from underarms for improved hygiene and freshness." }
    ],
    image: "/images/waxing.jpg",
    description: "Waxing is an efficient method for long-lasting smoothness. Our professional service ensures minimal discomfort using premium waxes and techniques, tailored for sensitive skin."
  },
  {
    title: "Manicure & Pedicure",
    types: [
      { type: "Classic Manicure", description: "Trimming, shaping, cuticle care, and polish to enhance appearance and nail health." },
      { type: "Spa Pedicure", description: "Foot soak, exfoliation, callus removal, massage, and polish application for rejuvenated feet." },
      { type: "Gel Polish", description: "Durable gel polish with a high-gloss finish that lasts longer without chipping." }
    ],
    image: "/images/manicure_pedicure.jpg",
    description: "A perfect blend of care and beauty, our manicure & pedicure services promote healthy nails and smooth skin. Ideal for regular maintenance or special occasions."
  },
  {
    title: "Body Massage",
    types: [
      { type: "Aromatherapy Massage", description: "Massage using essential oils to relax muscles, improve mood, and promote overall wellness." },
      { type: "Deep Tissue Massage", description: "Targets deep muscle layers to relieve chronic pain, knots, and tension." },
      { type: "Swedish Massage", description: "Gentle and relaxing massage to improve circulation and relieve everyday tension." }
    ],
    image: "/images/body_massage.jpg",
    description: "Our body massages are designed to rejuvenate and relax. Whether you need stress relief or targeted therapy, our experienced therapists deliver the perfect treatment."
  }
];

export const SkinTab = () => {
  return (
    <div className="skintab-container">
      <h1 className="skintab-main-title">Comprehensive Skin Care Services</h1>

      <div className="skintab-main-services">
        {mainServices.map((service, index) => (
          <div key={index} className="skintab-main-service-card">
            <img src={service.icon} alt={service.name} className="skintab-main-service-icon" />
            <h2 className="skintab-main-service-name">{service.name}</h2>
          </div>
        ))}
      </div>

      <div className="skintab-details">
        {serviceDetails.map((detail, index) => (
          <div key={index} className="skintab-detail-card">
            <img src={detail.image} alt={detail.title} className="skintab-detail-image" />
            <h2 className="skintab-detail-title">{detail.title}</h2>
            <p className="skintab-detail-description">{detail.description}</p>
            <h3 className="skintab-detail-types-heading">Explore the Types of {detail.title}</h3>
            <ul className="skintab-detail-types-list">
              {detail.types.map((typeItem, tIndex) => (
                <li key={tIndex} className="skintab-detail-type-item">
                  <strong>{typeItem.type}:</strong> {typeItem.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
