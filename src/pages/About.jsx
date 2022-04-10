import React from "react";

export default function About() {
  return (
    <div className="bg-card">
      <div className="rectangle">
        <img
          src="/logo-unicorn.png"
          alt="unicorn pic"
          className="unicorn-pic"
        />
        <h2>About</h2>
        <div className="text">
          <h4>
            I’m a fast learner, very proactive and the most organized employee
            you could ever have. Also a Front-End Developer and talented
            brazilian girl.
          </h4>
          <p>
            But, as a young free spirit, when I decided that I was done with
            that, I started to learn how to program (all the basic stuff,
            though), and nowadays I’m able to build lots of things with HTML,
            CSS, and even JavaScript automation. What fascinates me with
            programming is that I’m always learning and thinking about the
            sequences and logistics behind all the rules, and, when I see what I
            made, it is an indescribable feeling. Okay… maybe it’s because I’m
            too passionate!
          </p>
          <p className="email">hello@dormenique.com</p>
        </div>
      </div>
    </div>
  );
}
