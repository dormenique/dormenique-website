import React from "react";
import "./Card.css";
import Header from "./Header";
import { AboutCard, ExperienceCard, SkillsCard } from "./Info";

export default function Card() {
  return (
    <div className="bg-card">
      <div className="rectangle">
        <Header />
        <div className="info-group">
          <AboutCard />
          <ExperienceCard />
          <SkillsCard />
        </div>
        <img src="/selo.svg" alt="stamp" className="stamp" />
      </div>
    </div>
  );
}
