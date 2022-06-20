import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink
        exact
        activeClassName="selected-link"
        className="home-link"
        to="/"
      >
        { '<Home>' }
      </NavLink>
      <NavLink
        exact
        activeClassName="selected-link"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        exact
        activeClassName="selected-link"
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        exact
        activeClassName="selected-link"
        to="/contact"
      >
        Contact
      </NavLink>
      <a
        href="https://github.com/tainnaps"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/tainnaps/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </nav>
  );
}

export default NavBar;
