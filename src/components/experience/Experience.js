import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience container">
      <div className="education">
        <h2>📚 Education</h2>
        <div className="item">
          <div className="item-info">
            <h3 className="university">Stanford University</h3>
            <p className="degree">MSc (Human Computer Interaction)</p>
          </div>
          <p className="dates">2017-2021</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
        <div className="item">
          <div className="item-info">
            <h3 className="university">MIT Summer School</h3>
            <p className="degree">UX Training Bootcamp</p>
          </div>
          <p className="dates">2013-2014</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
        <div className="item">
          <div className="item-info">
            <h3 className="university">Stanford University</h3>
            <p className="degree">BSs in Software Engineering</p>
          </div>
          <p className="dates">2009-2012</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
      </div>
      <div className="work">
        <h2>💼 Work Experience</h2>
        <div className="item">
          <i className="bi bi-rocket-fill"></i>
          <div className="item-info">
            <h3 className="company">SpaceFleet</h3>
            <p className="position">Senior Product Designer</p>
          </div>
          <p className="dates">April 2019 - Current</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
        <div className="item">
          <i className="bi bi-music-note"></i>
          <div className="item-info">
            <h3 className="company">Music Mash</h3>
            <p className="position">Information Architect</p>
          </div>
          <p className="dates">April 2019 - Current</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
        <div className="item">
          <i className="bi bi-person-fill"></i>
          <div className="item-info">
            <h3 className="company">Kingdom</h3>
            <p className="position">Ui Designer</p>
          </div>
          <p className="dates">April 2019 - Current</p>
          <i className="bi bi-arrow-up-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Experience;
