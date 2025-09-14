import React from 'react';
import '../HairTab/HairTab.css';

export const HairTab=()=> {
  const services = [
    { name: 'Smoothing', description: 'Transform frizzy, unmanageable hair into a sleek, smooth masterpiece with our professional smoothing treatment.', image: 'https://placehold.co/400x300/F0F9FF/0C4A6E?text=Smoothing' },
    { name: 'Botox & Nano Plastica', description: 'Revitalize and repair your hair from the inside out, restoring its health, strength, and natural shine.', image: 'https://placehold.co/400x300/F0FDF4/15803D?text=Botox' },
    { name: 'Rebonding', description: 'Permanently straighten your hair for a poker-straight, glossy finish that lasts for months.', image: 'https://placehold.co/400x300/FEF2F2/991B1B?text=Rebonding' },
    { name: 'Hair Color & Highlights', description: 'From a subtle refresh to a bold new look, our colorists will help you find the perfect shade.', image: 'https://placehold.co/400x300/FDE68A/B45309?text=Color' },
    { name: 'Hair Spa', description: 'A relaxing and nourishing treatment to deep-condition your hair and scalp, leaving them healthy and hydrated.', image: 'https://placehold.co/400x300/ECFEFF/164E63?text=Hair+Spa' },
    { name: 'Hair Creatin', description: 'Strengthen and rebuild hair fibers, preventing breakage and promoting healthy hair growth.', image: 'https://placehold.co/400x300/FFE4E6/BE185D?text=Creatin' },
    { name: 'Hair Styling', description: 'Get the perfect look for any occasion, from elegant updos to casual, bouncy blowouts.', image: 'https://placehold.co/400x300/F5F5F4/57534E?text=Styling' },
    { name: 'Bridal Styling', description: 'Look stunning on your special day with custom bridal hair designs that last all day and night.', image: 'https://placehold.co/400x300/F0E6F0/A020F0?text=Bridal' },
    { name: 'Men\'s Grooming', description: 'Professional cuts, styling, and treatments specifically tailored for men’s hair.', image: 'https://placehold.co/400x300/E5F8E5/48BB78?text=Grooming' },
  ];

  const testimonials = [
    { name: 'Sarah J.', quote: 'My hair has never looked better! The Rebonding service was fantastic and the staff were so professional.', image: 'https://placehold.co/100x100/A0E7E5/000000?text=SJ' },
    { name: 'Mark D.', quote: 'I love my new Hair Styling! It was exactly what I wanted for my big event. I highly recommend them.', image: 'https://placehold.co/100x100/F4D03F/000000?text=MD' },
    { name: 'Lisa K.', quote: 'The Hair Spa was a truly relaxing experience. My scalp feels so clean and my hair feels incredibly soft.', image: 'https://placehold.co/100x100/A0AEC0/000000?text=LK' },
  ];

  return (
    <div className="app-container">

      {/* Main Header */}
      <header className="header">
        <h1 className="header-title">
          Discover Your Perfect Look
        </h1>
        <p className="header-subtitle">
          Explore our full range of professional hair services designed just for you.
        </p>

        {/* Continuous Scrolling Animation (Top) */}
        <div className="scroll-container-top">
          <div className="scroll-text">
            {services.map((service, index) => (
              <span key={index}>{service.name}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {services.map((service, index) => (
              <span key={`dup-${index}`}>{service.name}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="main-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img 
                src={service.image} 
                alt={service.name} 
                className="service-image" 
              />
              <h2 className="service-name">{service.name}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2 className="testimonial-header">
          What Our Clients Say
        </h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header-flex">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-image" 
                />
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Continuous Scrolling Animation (Bottom) */}
      <div className="scroll-container-bottom">
        <div className="scroll-text-reverse">
          {[...services, ...testimonials].map((item, index) => (
            <span key={index}>{item.name}</span>
          ))}
          {[...services, ...testimonials].map((item, index) => (
            <span key={`dup-${index}`}>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
