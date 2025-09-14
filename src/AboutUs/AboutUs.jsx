import React from 'react';
import '../AboutUs/AboutUs.css';

export const AboutUs = () => {
  return (
    <div className="aboutus-special-edition">
      <header className="aboutus-header">
        <span className="aboutus-edition"></span>
        <h2 className="aboutus-hello">hello</h2>
        <span className="aboutus-year"> Since 2010</span>
      </header>
      <main className="aboutus-main">
        <h1 className="aboutus-title">about me</h1>
        <div className="aboutus-content">
          <section className="aboutus-image-section">
            <img
              src="/FrontImage.jpg"
              alt="Profile"
              className="aboutus-profile-image"
            />
            <div className="aboutus-image-card">
              <div>
                <img src=''></img>
              </div>
            </div>
          </section>
          <section className="aboutus-text-section">
            <h2 className="aboutus-who-title">Who are we?</h2>
            <div className="aboutus-about-text">
              <p>
                When I first opened this salon in 2010, it was just a small shop, and it was only me working, driven by my love. Back then, every client, every appointment, and every result mattered deeply—I poured my heart into each service, learning, experimenting, and striving to do my best. Those early days taught me the importance of dedication, patience, and the joy of seeing a client leave happy and confident.
              </p>
              <p>
                Over the past 15 years, this journey has been incredible. With every client who walked through our doors, I learned something new, honed my skills, and gained insights into the art and science of beauty. Through continuous effort, training, and exploring the latest techniques, I was able to grow the salon and build a reputation for professional, high-quality, and personalized services.
                <br></br>
                Today, I’m proud to lead a talented team of professionals who share my passion for beauty and wellness. Together, we strive to create an experience that is not only about looking good but also feeling truly cared for. Every service we offer is a result of years of learning, practice, and a commitment to excellence.
              </p>
              <p>
                I still remember those first days, and that same passion drives me now—to innovate, improve, and ensure that every client who visits leaves feeling their absolute best. <b>My goal has always been simple: to make your experience memorable, your beauty enhanced, and your confidence radiant.</b>  I am grateful for your trust and support, and I look forward to continuing this journey with you, always aiming higher and doing better, every single day.
              </p>
            </div>
          </section>
          <aside className="aboutus-name-aside">
            <span className="aboutus-vertical-name ">Seema Beauty Salon</span>
          </aside>
        </div>
      </main>

    </div>
  );
};


