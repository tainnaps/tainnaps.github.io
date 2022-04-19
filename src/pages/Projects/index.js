import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import TechCheckbox from '../../components/TechCheckbox';
import technologies from '../../data/technologies';
import projects from '../../data/projects';
import './index.css';

function Projects() {
  const renderTechChecboxes = () => (
    technologies.map(({ name }) => (
      <TechCheckbox
        key={ name }
        name={ name }
      />
    ))
  );

  const renderProjectCards = () => (
    projects.map((project) => (
      <ProjectCard
        key={ project.name }
        name={ project.name }
        image={ project.image }
        description={ project.description }
        repository={ project.repository }
        application={ project.application }
      />
    ))
  );

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
            { renderTechChecboxes() }
          </section>
        </section>
      </section>
      <section className="left">
        { renderProjectCards() }
      </section>
    </main>
  );
}

export default Projects;
