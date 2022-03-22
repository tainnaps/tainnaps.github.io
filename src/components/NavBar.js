import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
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
