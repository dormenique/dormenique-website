import React from "react";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <img src="/github-icon.svg" alt="github icon" />
        github
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <img src="/linkedin-icon.svg" alt="linkedin icon" />
        linkedin
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <img src="/medium-icon.svg" alt="medium icon" />
        medium
      </a>
      <a href="http://github.com" target="_blank" rel="noreferrer">
        <img src="/instagram-icon.svg" alt="instagram icon" />
        instagram
      </a>
    </div>
  );
}
