import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function PageTitle({ title }) {
  return (
    <section className="page-title">
      <h1>{ title }</h1>
      <hr />
    </section>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default PageTitle;
