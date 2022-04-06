import React from "react";
import "./Card.css";
import Profile from "./Profile";
import Contact from "./Contact";
import About from "./About";
import SocialMedia from "./SocialMedia";
import Skills from "./Skills";
import Experience from "./Experience";
import Arrow from "./Arrow";

export default function Card() {
  return (
    <body>
      <Arrow />
      <div className="bg-card">
        <div className="rectangle">
          <img
            src="/logo-unicorn.png"
            alt="unicorn pic"
            className="unicorn-pic"
          />
          <Profile />
        </div>
        <img src="/selo.svg" alt="stamp" className="stamp" />
      </div>
    </body>
  );
}
