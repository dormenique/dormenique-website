import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Route path="/profile" component={Profile} />
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/experience" component={Experience} />
    <Route path="/contact" component={Contact} />
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
