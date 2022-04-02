import React from "react";
import WelcomeText from "./WelcomeText";

export default function About() {
  return (
    <div className="about-page">
      <WelcomeText />
      <p>
        My focus area for the past few years has been front-end development with
        HTML, CSS, JavaScript (React, JSON, jQuery). I also work with Git,
        Node.js, API, and WordPress.
      </p>
      <img
        src={"../profile-pic.jpeg"}
        className="img-profile"
        alt="profile pic"
      />
      <p>
        When I was 23 years old, I left my city (Jundiaí, in São Paulo, Brazil) to
        live in Lisbon, Portugal. In Brazil, I put all my effort on being my own
        boss: I was a really successful hand lettering teacher, teaching in
        really important places for the visual arts market in Brazil, such as
        several different SESCs (one sort of a cultural association for workers
        that has different units spread through the whole country), Papelaria
        Universitária and Casa das Letras (two great stores for buying art
        supplies), and even on Pixel Show, an arts festival based in São Paulo.
        But, as a young free spirit, when I decided that I was done with that, I
        started to learn how to program (all the basic stuff, though), and
        nowadays I’m able to build lots of things with HTML, CSS, and even
        JavaScript automation. What fascinates me with programming is that I’m
        always learning and thinking about the sequences and logistics behind
        all the rules, and, when I see what I made, it is an indescribable
        feeling. Okay… maybe it’s because I’m too passionate!
      </p>
    </div>

  );
}
