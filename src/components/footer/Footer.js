import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer container">
      <div className="footer-header">
        <h5 className="subtitle">
          Ready to make something kickass? <br />
          <span>Let's get on a call.</span>
        </h5>
      </div>
      <div className="footer-content">
        <div className="footer-contact">
          <a href="#home">
            Portfolio Creator <span className="point">.</span>
          </a>
          <p>4353 Delaware Avenue, San Francisco, USA</p>
          <span className="email">
            <i className="bi bi-envelope-fill"></i>
            hi@thefolio.com
          </span>
        </div>
        <div className="footer-links">
          <div className="col1">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
            </ul>
          </div>
          <div className="col2">
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col3">
            <ul>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p>© All rights reserved. Sumit Hegde . Powered by Webflow/ Image License Info/ Instructions/ Changelog/ Style Guide</p>
      </div>
    </footer>
  );
};

export default Footer;
