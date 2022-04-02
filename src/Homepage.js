import React from "react";
import "./Homepage.css";
import WelcomeText from "./Components/Welcome/WelcomeText";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";

export default function Homepage() {
  return (
    <div className="home-page">
      <Header />
      <WelcomeText />
      <About />
      <Experience />
    </div>
  );
}
