// src/components/HairTab/HairTab.jsx
import React from 'react';
import './HairTab.css';

const services = [
  {
    name: 'Smoothing Service',
    description: 'Our professional hair smoothing treatment is designed to effectively reduce frizz, eliminate unruly hair, and enhance natural shine. It helps to make your hair soft, silky, and more manageable, providing a sleek and polished look that lasts for weeks. Ideal for all hair types, this treatment works by nourishing and strengthening hair from root to tip, leaving it smooth, healthy, and easier to style every day. Perfect for anyone looking to tame their hair and achieve a smooth, glossy finish.',
    images: ['/images/smoothing1.jpg', '/images/smoothing2.jpg'],
    video: '/videos/smoothing.mp4',
  },
  {
    name: 'Rebonding Service',
    description: 'Our expert hair rebonding service offers a long-lasting solution to transform curly, wavy, or frizzy hair into perfectly straight, smooth strands. Using advanced chemical techniques, the treatment restructures the hair bonds to achieve a sleek, shiny, and ultra-straight finish that stays intact for several months. It not only makes your hair more manageable but also enhances its strength and overall health. Ideal for those seeking effortless styling and a polished look every day.',
    images: ['/images/rebonding1.jpg', '/images/rebonding2.jpg'],
    video: '/videos/rebonding.mp4',
  },
  {
    name: 'Botox Nano Plastica Hair Service',
    description: 'Our advanced Botox Nano Plastica Hair Treatment is a revolutionary solution designed to deeply repair and rejuvenate damaged, brittle, or lifeless hair. Combining the power of Botox and Nano Plastica technology, this treatment penetrates deep into the hair structure to restore strength, hydration, and elasticity. It smooths frizz, reduces split ends, and enhances natural shine, leaving your hair soft, healthy, and visibly revitalized. Suitable for all hair types, this non-invasive treatment helps improve manageability and gives your hair a youthful, silky appearance that lasts for weeks.',
    images: ['/BotoxImage1.jpg', '/BotoxImage2.jpg'],
    video: '/videos/botox.mp4',
  },
  {
    name: 'Hair Color Service',
    description: 'Our Professional Hair Color Service offers expert hair coloring solutions tailored to your individual style and personality. Whether you want a subtle shade enhancement, vibrant new color, highlights, or a full transformation, we use high-quality, salon-grade products to ensure long-lasting, even, and stunning results. Our experienced colorists carefully analyze your hair type and condition to select the perfect formula, while maintaining the health and integrity of your hair. Suitable for all hair types, this service provides a radiant, glossy finish and boosts your confidence with every shade.',
    images: ['/images/haircolor1.jpg', '/images/haircolor2.jpg'],
    video: '/videos/haircolor.mp4',
  },
  {
    name: 'Rejuvenating Hair Spa Treatment',
    description: 'Our Rejuvenating Hair Spa Experience is designed to deeply nourish, hydrate, and restore your hair’s natural vitality. Using a blend of high-quality, salon-grade products and specialized techniques, this treatment helps repair damaged strands, reduce dryness, and improve scalp health. It promotes stronger, softer, and shinier hair while relieving stress and tension through a relaxing scalp massage. Suitable for all hair types, the hair spa provides a soothing and revitalizing experience, leaving your hair healthy, manageable, and full of life.',
    images: ['/images/hairspa1.jpg', '/images/hairspa2.jpg'],
    video: '/videos/hairspa.mp4',
  },
  {
    name: 'Keratin Hair Treatment',
    description: 'Our Keratin Hair Treatment is a professional solution designed to smooth, strengthen, and restore damaged or frizzy hair by infusing it with pure keratin proteins. This advanced treatment works by filling in gaps in the hair’s natural structure, reducing frizz, enhancing shine, and improving manageability. Ideal for all hair types, it helps make your hair softer, silkier, and more resilient to everyday damage caused by heat styling, pollution, and chemical treatments. Enjoy long-lasting smoothness, easier styling, and a healthier-looking finish that radiates confidence.',
    images: ['/images/creatin1.jpg', '/images/creatin2.jpg'],
    video: '/videos/creatin.mp4',
  },
  {
    name: 'Hair Styling Service',
    description: 'Our Professional Hair Styling Service offers expert styling tailored to your unique look and occasion. Whether you want a sleek everyday style, voluminous blowout, trendy curls, elegant updo, or a modern haircut, our skilled stylists use precision techniques and high-quality products to bring your vision to life. Perfect for special events, parties, or simply refreshing your everyday style, this service ensures your hair looks polished, fashionable, and full of personality. Suitable for all hair types, we focus on enhancing your natural beauty while providing long-lasting results.',
    images: ['/images/styling1.jpg', '/images/styling2.jpg'],
    video: '/videos/styling.mp4',
  },
];

export const HairTab = () => (
  <section className="hair-tab-container">
    <h1 className="hair-tab-heading">
      From Cuts to Color – Comprehensive Hair Solutions
    </h1>

    <div className="hair-tab-marquee-wrapper">
      <div className="hair-tab-marquee">
        {services.map((service, idx) => (
          <div key={idx} className="hair-tab-marquee-item">
            {service.name}
          </div>
        ))}
      </div>
    </div>

    <div className="hair-tab-details">
      {services.map((service, idx) => (
        <div key={idx} className="hair-tab-service">
          <div className="hair-tab-media">
            <img src={service.images[0]} alt={`${service.name} 1`} />
            <img src={service.images[1]} alt={`${service.name} 2`} />
            <video controls>
              <source src={service.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="hair-tab-service-name">{service.name}</h2>
          <p className="hair-tab-service-description">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);
