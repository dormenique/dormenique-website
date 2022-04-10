import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to='/profile'>Profile</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
