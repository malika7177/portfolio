import React from "react";
import "./faq.css";

const Faq = () => {
  return (
    <section id="faq" className="faq container">
      <div className="faq-header">
        <h5 className="title">FAQ</h5>
        <h2 className="subtitle">Frequently Asked Questions</h2>
      </div>
      <div className="faq-container">
        <div className="column1">
          <div className="faq-item">
            <h3 className="question">What type of projects do you take on?</h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">What is your hourly rate?</h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">What time-zone do you work in?</h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">
              What is the typical timeline for a project?
            </h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
        </div>
        <div className="column2">
          <div className="faq-item">
            <h3 className="question">How do you charge for projects ?</h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">
              What does your design process look like?
            </h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">
              What metrics do you use to measure success?
            </h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
          <div className="faq-item">
            <h3 className="question">
              What if I need help after the project is complete?
            </h3>
            <i className="bi bi-chevron-compact-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
