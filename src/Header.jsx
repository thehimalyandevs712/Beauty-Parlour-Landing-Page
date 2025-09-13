import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <span className="header-logo-icon">◉</span>
      <span className="header-logo-text">Your Logo</span>
    </div>
    <nav className="header-nav">
      <a href="/" className="header-link header-link-active">Home</a>
      <a href="/aboutus" className="header-link">About Us</a>
      <a href="/contact" className="header-link">Contact</a>
    </nav>
  </header>
);

export default Header;
