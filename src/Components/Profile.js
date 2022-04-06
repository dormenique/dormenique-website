import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div /*redirect to Contact.js*/>
      <div className="header-card">
        <img
          src="/profile-pic.jpeg"
          alt="profile pic"
          className="profile-pic"
        />
        <div className="profile-text">
          <h2>Dominique Dias</h2>
          <p>25 years old</p>
          <p>Lisbon</p>
        </div>
      </div>
      <ul className="info-group">
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <p>
        I’m a fast learner, very proactive and the most organized employee you
        could ever have. Also a Front-End Developer and talented brazilian girl.
      </p>
      <p className="email">hello@dormenique.com</p>
    </div>
  );
}
