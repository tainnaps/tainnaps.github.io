import React from 'react';
import technologies from '../../data/technologies';
import './index.css';

function Projects() {
  return (
    <main className="projects-content">
      <section className="right">
        <section className="projects-title">
          <h1>Projects</h1>
          <hr />
        </section>
        <section className="projects-search">
          <p>Filter projects by technologies</p>
          <section className="tech-filter">
            {
              technologies.map(({ name }) => (
                <label
                  htmlFor={ name }
                  key={ name }
                  className="tech-label"
                >
                  <input
                    type="checkbox"
                    id={ name }
                    name={ name }
                  />
                  { name }
                </label>
              ))
            }
          </section>
        </section>
      </section>
      <section className="left"></section>
    </main>
  );
}

export default Projects;
