import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link className="home-link" to="/">{ '<Tainá Santana>' }</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/technologies">Technologies</Link>
      <Link to="/contact">Contact</Link>
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
