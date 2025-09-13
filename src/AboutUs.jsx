import React from 'react';
import './AboutUs.css';

export const AboutUs = () => {
  return (
    <div className="aboutus-special-edition">
      <header className="aboutus-header">
        <span className="aboutus-edition"></span>
        <h2 className="aboutus-hello">hello</h2>
        <span className="aboutus-year"> Since 2025</span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus nisi, aliquam id sapien eu, efficitur cursus sem. Nullam pharetra lorem id elit vestibulum euismod. Quisque ornare mollis velit ac vestibulum. Etiam porttitor pretium justo, ac condimentum turpis cursus vulputate. Curabitur massa risus, congue et turpis at, scelerisque fringilla tortor. Vivamus nec semper sem, eu consectetur elit. Suspendisse laoreet ipsum at feugiat tincidunt. Donec tortor est, placerat vitae egestas sed, tristique ut quam.
              </p>
              <p>
                Phasellus varius, mauris quis maximus fringilla, nibh mauris pharetra velit, sed suscipit lectus justo vel eros. Nunc quis augue mi. Mauris magna nulla, congue id consequat et, vulputate at sem. Proin tincidunt convallis leo ut laoreet. Nunc eget tortor in velit interdum vulputate vel vel dui. Donec odio eros, sagittis quis dui id, scelerisque bibendum leo. Suspendisse potenti.
              </p>
              <p>
                Donec quam turpis, convallis sit amet interdum at, eleifend vel sem. Nulla tincidunt fringilla lacus eu venenatis. Mauris posuere justo nec magna lobortis ultricies. Donec lobortis justo non facilisis pellentesque. Fusce non placerat massa, sit amet pretium orci. Sed vestibulum arcu orci quis venenatis.
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

 
