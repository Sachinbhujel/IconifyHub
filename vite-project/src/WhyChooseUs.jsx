import React from "react";
import "./App.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose IconifyHub?</h2>
        <p className="subtitle">The ultimate source for modern and customizable icons.</p>
        <div className="reasons">
          <div className="reason">
            <h3>🔍 Searchable</h3>
            <p>Easily find icons by name, category, or tags with our fast and intuitive search.</p>
          </div>
          <div className="reason">
            <h3>🎨 Customizable</h3>
            <p>Change icon size, color, and style before downloading. Make it yours in seconds.</p>
          </div>
          <div className="reason">
            <h3>🌙 Dark & Light Mode</h3>
            <p>Choose the theme that suits you best, with a sleek interface that adapts to your vibe.</p>
          </div>
          <div className="reason">
            <h3>🚀 Developer Friendly</h3>
            <p>Copy SVG code directly or download in your desired format—optimized for web and apps.</p>
          </div>
          <div className="reason">
            <h3>📁 Community Uploads</h3>
            <p>Upload and share your own icon packs. Grow with a passionate design community.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;