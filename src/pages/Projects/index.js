import React, { useContext, useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import PageTitle from '../../components/PageTitle';
import TechFilter from '../../components/TechFilter';
import projectsData from '../../data/projects';
import TechFilterContext from '../../context/TechFilterContext';
import './index.css';

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const { techFilter } = useContext(TechFilterContext);

  const filterProjects = () => {
    const filteredProjects = projectsData.filter(({ technologies }) =>
      techFilter.every((technologie) => technologies.includes(technologie))
    );

    setProjects(filteredProjects);
  };

  useEffect(() => {
    techFilter.length
      ? filterProjects()
      : setProjects(projectsData);
  }, [techFilter]);

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
        <PageTitle title="Projects" />
        <section className="projects-search">
          <p>Filter projects by technologies</p>
          <TechFilter />
        </section>
      </section>
      <section className="left">
        { projects.length
          ? renderProjectCards()
          : (
            <section className="project-not-found">
              <h2>Ops!</h2>
              <p> There is no project with all those technologies.</p>
            </section>
          )
        }
      </section>
    </main>
  );
}

export default Projects;
