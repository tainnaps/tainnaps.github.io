import React from 'react';
import './index.css';
import technologies from '../../data/technologies';

function Technologies() {
  return (
    <section className="technologies-section">
      <h1>Technologies</h1>
      <section className="technologies">
        {
          technologies.map(({ name, imgSrc }) => (
            <div key={ name } className="tech-card">
              <img className="tech-logo" src={ imgSrc } alt={ name } />
              <h3 className="tech-name">{ name }</h3>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default Technologies;
