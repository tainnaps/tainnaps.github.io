import React from 'react';
import Footer from '../../components/Footer';
import PersonalPicture from '../../components/PersonalPicture';
import './index.css';

function Home() {
  return (
    <>
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
        <PersonalPicture />
      </main>
      <Footer />
    </>
  );
}

export default Home;
