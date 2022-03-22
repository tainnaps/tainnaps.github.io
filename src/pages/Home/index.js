import React from 'react';
import './index.css';

function Home() {
  return (
    <main className="home-content">
      <section className="info">
        <h1>Tainá Santana</h1>
        <p>Full Stack Software Developer</p>
        <section className="icons">
          <a
            href="https://www.linkedin.com/in/tainnaps/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/tainnaps"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </section>
      </section>
      <section>
        <img className="personal-picture" src="https://64.media.tumblr.com/e97a7387a98143108a3e0f81cc6115b4/7fc858227fd0b3f5-f0/s2048x3072/5d0011cebe9c925966b00183853ef9d3a1cff8bd.jpg" alt="Tainá" />
      </section>
    </main>
  );
}

export default Home;
