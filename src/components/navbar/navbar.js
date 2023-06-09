import React from "react";
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <button className="nav-button" onClick={() => window.scrollTo(0, 0)}><span>Home</span></button>
      <button className="nav-button" onClick={() => window.scrollTo(0, document.getElementById('section-about-us').offsetTop)}><span>About Us</span></button>
      <button className="nav-button" onClick={() => window.scrollTo(0, document.getElementById('section-pricing').offsetTop)}><span>Pricing</span></button>
    </nav>
  );
};

export default NavBar;