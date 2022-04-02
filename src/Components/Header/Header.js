import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src={"../logo-unicorn.png"}
        className="img-logo"
        alt="logo unicorn"
      />
      <p>Dominique Dias - Front-End Developer</p>
      <ul className="navbar">
        <li>About</li>
        <li>
          Skills
          <ul>
            <li>What Can I Do</li>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
