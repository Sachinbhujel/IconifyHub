import React from "react";
import "./App.css";

export default function Illustrations() {
  const illustrations = [
    {
      title: "Business",
      description: "Perfect for startups, marketing, and enterprise use cases.",
      image: "https://images.pexels.com/photos/5598290/pexels-photo-5598290.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Education",
      description: "Illustrations for online courses, tutorials, and schools.",
      image: "https://images.pexels.com/photos/12940817/pexels-photo-12940817.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Lifestyle",
      description: "Colorful illustrations for blogs, lifestyle apps, and more.",
      image: "https://images.pexels.com/photos/5081930/pexels-photo-5081930.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="illustration-container">
      <h2 className="illustration-title">Illustration Categories</h2>
      <p className="illustration-subtitle">
        Beautifully crafted illustrations for every use case.
      </p>

      <div className="illustration-grid">
        {illustrations.map((item, index) => (
          <div className="illustration-card" key={index}>
            <img src={item.image} alt={item.title} className="illustration-img" />
            <h3 className="illustration-name">{item.title}</h3>
            <p className="illustration-desc">{item.description}</p>
            <button className="download-button">View Collection</button>
          </div>
        ))}
      </div>
    </div>
  );
}