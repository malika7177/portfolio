import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials container">
      <div className="testimonials-header">
        <h5 className="title">Testimonials</h5>
        <h1 className="subtitle">Word on the street</h1>
      </div>
      <div className="testimonials-container">
        <div className="tes-img">
          <img src="./assets/person2.jpg" />
        </div>
        <div className="tes-info">
          <i className="bi bi-quote"></i>
          <h2>
            Jade helped us build a software so intuitive that it didn't need a
            walkthrough. He solved complex problems with brilliant design.
          </h2>
          <div className="tes-bottom">
            <div className="name">
              <h5>John Franklin</h5>
              <span>Founder, Double Bunch</span>
            </div>
            <div className="slide-btn">
              <button className="tes-prev-btn">
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="tes-next-btn">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
