import React from "react";
import "./Homepage.css";
import WelcomeText from "./WelcomeText";

export default function Homepage() {
  return (
    <div className="home-page">
      <img
        src={"../logo-unicorn.png"}
        className="img-logo"
        alt="logo unicorn"
      />
      <WelcomeText />
    </div>
  );
}
