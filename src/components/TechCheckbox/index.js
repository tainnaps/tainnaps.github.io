import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function TechCheckbox({ name }) {
  const [checkedStatus, setCheckedStatus] = useState(false);
  return (
    <>
      <label
        htmlFor={ name }
        key={ name }
        className="tech-label"
      >
        <input
          type="checkbox"
          id={ name }
          name={ name }
          checked={ checkedStatus }
          onChange={ () => setCheckedStatus(!checkedStatus) }
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
