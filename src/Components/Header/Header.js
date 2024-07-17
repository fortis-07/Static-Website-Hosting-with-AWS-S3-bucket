import React from "react";
import "./Header.css";
import meme from "../../Resources/meme.png";

function Header() {
  return (
    <div className="header">
      <img src={meme} alt="" />
      <h1>Meme Generator</h1>
      <p>...get that meme</p>
    </div>
  );
}

export default Header;
