import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
      <div className="bg-card">
        <div className="rectangle">
          <div className="header-card">
            <img
              src="/profile-pic.jpeg"
              alt="profile pic"
              className="profile-pic"
            />
            <img
              src="/logo-unicorn.png"
              alt="unicorn pic"
              className="unicorn-pic"
            />
            <div className="profile-text">
              <h2>Dominique Dias</h2>
              <p>25 years old</p>
              <p>Lisbon</p>
            </div>
          </div>
          <p className="text">
            I’m a fast learner, very proactive and the most organized employee
            you could ever have. Also a Front-End Developer and talented
            brazilian girl.
          </p>
          <p className="email">hello@dormenique.com</p>
        </div>
      </div>
  );
}
