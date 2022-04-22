import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Title({ title }) {
  return (
    <section className="page-title">
      <h1>{ title }</h1>
      <hr />
    </section>
  );
}

Title.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Title;
