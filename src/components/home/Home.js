import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home container">
      <div className="home-info">
        <h1 className="home-title">
          <span>I design products</span> that delight and inspire people.
        </h1>
        <p className="home-subtitle">
          Hi! I'm Jake, a product designer based in Berlin. I create
          user-friendly interfaces for fast-growing startups.
        </p>
        <div className="home-btns">
          <a href="#" className="btn">
            Book all
          </a>
          <a href="#" className="btn">
            <span>Download CV</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="./assets/person.png" alt="person" />
      </div>
    </section>
  );
};

export default Home;
