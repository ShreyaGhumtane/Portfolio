// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
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

      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
            <Link to="/" className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/about-me" className="nav-link" href="/">
              About me
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/projects" className="nav-link" href="/">
              Projects
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/technical-skills" className="nav-link" href="/">
              Technical skills
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/publications" className="nav-link" href="/">
              Publications
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/resume" className='nav-link' href='/'>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
