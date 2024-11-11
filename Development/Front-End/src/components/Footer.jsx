import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <button>About Us</button>
        <button>Ordering Info</button>
        <button>Privacy Info</button>
        <button>Contact Us</button>
      </div>
      <div className="social-icons">
        <button>FB</button>
        <button>Insta</button>
        <button>TT</button>
        <button>Email</button>
      </div>
    </footer>
  );
};

export default Footer;
