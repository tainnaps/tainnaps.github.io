import React from 'react';
import PropTypes from 'prop-types';

function Icon({ href, className, blankTarget }) {
  return (
    <>
      {
        blankTarget
          ? (
            <a
              href={ href }
              target="_blank"
              rel="noreferrer"
            >
              <i className={ className }></i>
            </a>
          )
          : (
            <a
              href={ href }
            >
              <i className={ className }></i>
            </a>
          )
      }
    </>
  );
}

Icon.defaultProps = {
  blankTarget: true,
};

Icon.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default Icon;
