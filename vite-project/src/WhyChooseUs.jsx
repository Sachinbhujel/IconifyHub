import React from "react";
import "./App.css";

const reasonsData = [
  {
    title: "🔍 Searchable",
    description: "Easily find icons by name, category, or tags with our fast and intuitive search.",
  },
  {
    title: "🎨 Customizable",
    description: "Change icon size, color, and style before downloading. Make it yours in seconds.",
  },
  {
    title: "🌙 Dark & Light Mode",
    description: "Choose the theme that suits you best, with a sleek interface that adapts to your vibe.",
  },
  {
    title: "🚀 Developer Friendly",
    description: "Copy SVG code directly or download in your desired format—optimized for web and apps.",
  },
  {
    title: "📁 Community Uploads",
    description: "Upload and share your own icon packs. Grow with a passionate design community.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose IconifyHub?</h2>
        <p className="subtitle">The ultimate source for modern and customizable icons.</p>
        <div className="reasons">
          {reasonsData.map((item, index) => (
            <div className="reason" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;