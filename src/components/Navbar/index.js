import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutme">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/work">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactme">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
