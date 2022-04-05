import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-card" /*redirect to Contact.js*/>
      <img src="/profile-pic.jpeg" alt="profile pic" className="profile-pic" />
      <div className="profile-text">
        <h2>Dominique Dias</h2>
        <p>25 years old</p>
        <p>hello@dormenique.com</p>
      </div>
      <img src="/logo-unicorn.png" alt="unicorn pic" className="unicorn-pic" />
    </div>
  );
}
