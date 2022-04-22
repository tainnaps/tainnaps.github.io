import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Button({ type, handleClick, content }) {
  return (
    <button
      className="custom-button"
      type={ type }
      onClick={ handleClick }
    >
      { content }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  content: PropTypes.string,
}.isRequired;

export default Button;
