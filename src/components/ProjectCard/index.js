import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ProjectCard({ name, image, description, repository, application }) {
  return (
    <>
      <div className="project-card">
        <img src={ image } alt={ name } className="project-image" />
        <div className="project-info">
          <h3>{ name }</h3>
          <p>{ description }</p>
          <div>
            <a
              href={ repository }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={ application }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  repository: PropTypes.string,
  application: PropTypes.string,
};

export default ProjectCard;
