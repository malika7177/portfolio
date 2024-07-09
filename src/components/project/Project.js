import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section id="project" className="project container">
      <h3 className="title">Projects</h3>
      <div className="project-info">
        <h1 className="subtitle">
          I bring results. <br />
          My clients are proof
        </h1>
        <a href="#" className="btn">
          View all projects
        </a>
      </div>
      <div className="project-slide">
        <div className="project-item">
          <div className="item-img">
            <img src="./assets/project1.png" alt="pic1" />
          </div>
          <div className="item-info">
            <h4 className="item-title">Branding</h4>
            <h2 className="item-subtitle">Soulful Rebranding</h2>
            <a href="#">
              <span>View Project</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="project-item">
          <div className="item-img">
            <img src="../assets/project2.png" alt="pic2" />
          </div>
          <div className="item-info">
            <h4 className="item-title">Product Design</h4>
            <h2 className="item-subtitle">Datadash Product design</h2>
            <a href="#">
              <span>View Project</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="project-item">
          <div className="item-img">
            <img src="../assets/project3.png" alt="pic3" />
          </div>
          <div className="item-info">
            <h4 className="item-title">Web Design</h4>
            <h2 className="item-subtitle">Maize Website Design</h2>
            <a href="#">
              <span>View Project</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="slider-btn">
        <button className="prev-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="next-btn">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Project;
