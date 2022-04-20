import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechFilterContext from './TechFilterContext';

function Provider({ children }) {
  const [techFilter, setTechFilter] = useState([]);

  const addTechFilter = (techName) => {
    const newTechFilter = [...techFilter, techName];

    setTechFilter(newTechFilter);
  };

  const removeTechFilter = (techName) => {
    const newTechFilter = techFilter.filter((tech) => tech !== techName);

    setTechFilter(newTechFilter);
  };

  const resetTechFilter = () => {
    setTechFilter([]);
  };

  const contextValue = {
    techFilter,
    addTechFilter,
    removeTechFilter,
    resetTechFilter,
  };

  return (
    <TechFilterContext.Provider value={ contextValue }>
      { children }
    </TechFilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf('Object'),
}.isRequired;

export default Provider;
