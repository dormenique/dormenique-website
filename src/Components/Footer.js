import React from "react";
import SocialMedia from "./SocialMedia";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialMedia />
      <p>
        Made with love by <strong>Dormenique</strong>
      </p>
    </footer>
  );
}
