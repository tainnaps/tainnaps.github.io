import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TechFilterContext from '../../context/TechFilterContext';
import './index.css';

function TechCheckbox({ name }) {
  const [isChecked, setIsChecked] = useState(false);
  const { addTechFilter, removeTechFilter } = useContext(TechFilterContext);

  const handleChange = ({ target }) => {
    const { checked, name } = target;

    setIsChecked(checked);

    checked
      ? addTechFilter(name)
      : removeTechFilter(name);
  };

  return (
    <>
      <label
        htmlFor={ name }
        key={ name }
        className="tech-label"
      >
        <input
          type="checkbox"
          className="tech-checkbox"
          id={ name }
          name={ name }
          checked={ isChecked }
          onChange={ handleChange }
        />
        { name }
      </label>
    </>
  );
}

TechCheckbox.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default TechCheckbox;
