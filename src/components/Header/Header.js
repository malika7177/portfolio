import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileBtnClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="header">
      <div className="header-title">
        <a href="#logo">
          Portfolio Creator<span>.</span>
        </a>
      </div>
      <nav>
      <ul className={isMobile ? "nav_links active" : "nav_links"}>
        <button className="close-menu" onClick={handleMobileBtnClick}>
          <i className="bi bi-x"></i>
        </button>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#bookCall">
            <span>Book a call</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </li>
      </ul>
      </nav>
      <button className="mobileBtn" onClick={handleMobileBtnClick}>
        <i className={isMobile ? "bi bi-x" : "bi bi-list"}></i>
      </button>
    </div>
  );
};

export default Header;
