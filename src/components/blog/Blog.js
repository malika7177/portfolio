import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog container">
      <div className="blog-info">
        <h5 className="title">Blogs</h5>
        <h1 className="subtitle">Latest Blogs</h1>
        <a href="#">
          <span>View all</span>
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      <div className="blog-posts">
      <div className="blog-post">
        <span className="date">April 16, 2021 6 mins</span>
        <h4 className="blog-title">
          Design tips for designers, that cover everything you need
        </h4>
        <a href="#" className="blog-btn">
          <span>Read the article</span>
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      
        <div className="blog-post">
          <span className="date">April 16, 2021 6 mins</span>
          <h4 className="blog-title">22 best UI design tools</h4>
          <a href="#" className="blog-btn">
            <span>Read the article</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="blog-post">
          <span className="date">April 16, 2021 6 mins</span>
          <h4 className="blog-title">
            How to build rapport with your web design clients
          </h4>
          <a href="#" className="blog-btn">
            <span>Read the article</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="blog-post">
          <span className="date">April 16, 2021 6 mins</span>
          <h4 className="blog-title">Top 6 free website mockup tools 2021</h4>
          <a href="#" className="blog-btn">
            <span>Read the article</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="blog-post">
          <span className="date">April 16, 2021 6 mins</span>
          <h4 className="blog-title">Logo design trends to avoid in 2021</h4>
          <a href="#" className="blog-btn">
            <span>Read the article</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
