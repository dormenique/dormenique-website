import React from "react";
import { About, Experience, Skills } from "./Info";
import "./Card.css";

export default function Card() {
  return (
    <div className="bg-card">
      <div className="rectangle">
        <div className="header-card" /*button to contact*/>
          <img
            src="/profile-pic.jpeg"
            alt="profile pic"
            className="profile-pic"
          />
          <h2>Dominique Dias</h2>
          <p>25 years old</p>
          <p>hello@dormenique.com</p>
          <img
            src="/logo-unicorn.png"
            alt="unicorn pic"
            className="unicorn-pic"
          />
        </div>
        <div className="info-group">
          <About />
          <Experience />
          <Skills />
        </div>
      </div>
    </div>
  );
}
