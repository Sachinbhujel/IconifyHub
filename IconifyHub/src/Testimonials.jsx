import React from "react";
import "./App.css";

const testimonialsData = [
  {
    message: "IconifyHub made it super easy to find clean, scalable icons for my startup.",
    author: "Sarah K., Product Designer",
  },
  {
    message: "Absolutely love the customizable icon options. Saved me hours of design work!",
    author: "Rahul M., Frontend Developer",
  },
  {
    message: "The upload feature and community icons are 🔥. Great platform for creatives.",
    author: "Emily J., Illustrator",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <h2>What Our Users Say</h2>
        <p className="desc">
          Trusted by designers, developers, and creators worldwide.
        </p>

        <div className="testimonial-grid">
          {testimonialsData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="message">“{item.message}”</p>
              <div className="author">— {item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;