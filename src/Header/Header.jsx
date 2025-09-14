import React from 'react';
import '../Header/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <img src="/SeemaSalonLogo.jpg" alt="Seema Salon Logo" className="header-logo-img" />
    </div>
    <nav className="header-nav">
      <a href="/" className="header-link header-link-active">Home</a>
      <a href="/aboutus" className="header-link">About Us</a>
      <a href="/contact" className="header-link">Contact</a>
    </nav>
  </header>
);

export default Header;
