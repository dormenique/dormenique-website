import React from "react";
import { About, Experience, Skills } from "./Info";
import "./Card.css";
import Header from "./Header";
import Contact from "./Contact";

export default function Card() {
  return (
    <div className="bg-card">
      <div className="rectangle">
        <Header />
        <div className="info-group">
          <About />
          <Experience />
          <Skills />
        </div>
        <img src="/selo.svg" alt="stamp" className="stamp"/>
      </div>
    </div>
  );
}
