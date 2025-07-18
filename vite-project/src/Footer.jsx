import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>IconifyHub</h2>
          <p>Your source for clean, scalable, and customizable icons.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Browse Icons</a></li>
              <li><a href="#">Upload</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IconifyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;