import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/techskills">
              Technical Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/work">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contactme">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
