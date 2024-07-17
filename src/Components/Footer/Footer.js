import React from "react";
import "./Footer.css";
import Twitter from "../../Resources/Twitter fav.png";
import LinkedIn from "../../Resources/LinkedIn fav.png";
import Instagram from "../../Resources/Instagram fav.png";
import Github from "../../Resources/Github fav.png";
function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/jossydee1">
        <img src={Twitter} alt="" />
      </a>
      <a href="https://linkedin.com/in/jossydee1/">
        <img src={LinkedIn} alt="" />
      </a>
      <a href="https://instagram.com/jossydee1/">
        <img src={Instagram} alt="" />
      </a>
      <a href="https://github.com/jossydee1">
        <img src={Github} alt="" />
      </a>
    </div>
  );
}

export default Footer;
