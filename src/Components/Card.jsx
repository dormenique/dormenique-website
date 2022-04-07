import React from "react";
import "./Card.css";
import Profile from "./Profile";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SocialMedia from "./SocialMedia";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Arrow from "./Arrow";

export default function Card() {
  return (
    <div>
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
    </div>
  );
}
