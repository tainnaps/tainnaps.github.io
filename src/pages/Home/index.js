import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../components/Icon';
import './index.css';

function Home() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/projects');
  };

  return (
    <main className="home-content">
      <section className="personal-info">
        <h1>Tainá Santana</h1>
        <p>Web Software Developer</p>
        <section className="media-icons">
          <Icon
            href="https://www.linkedin.com/in/tainnaps/"
            className="fa-brands fa-linkedin-in"
          />
          <Icon
            href="https://github.com/tainnaps"
            className="fa-brands fa-github"
          />
        </section>
        <button
          type="button"
          onClick={ handleButtonClick }
          className="custom-button"
        >
          Projects
        </button>
      </section>
      <section>
        <img
          className="personal-picture"
          src="https://64.media.tumblr.com/e97a7387a98143108a3e0f81cc6115b4/7fc858227fd0b3f5-f0/s2048x3072/5d0011cebe9c925966b00183853ef9d3a1cff8bd.jpg"
          alt="Tainá"
        />
      </section>
    </main>
  );
}

export default Home;
