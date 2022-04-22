import React, { useContext, useEffect } from 'react';
import TechCheckbox from '../../components/TechCheckbox';
import TechFilterContext from '../../context/TechFilterContext';
import technologies from '../../data/technologies';
import './index.css';

function TechFilter() {
  const { resetTechFilter } = useContext(TechFilterContext);

  useEffect(() => {
    resetTechFilter();
  }, []);

  const renderTechChecboxes = () => (
    technologies.map(({ name }) => (
      <TechCheckbox
        key={ name }
        name={ name }
      />
    ))
  );

  return (
    <section className="tech-filter">
      { renderTechChecboxes() }
    </section>
  );
}

export default TechFilter;
