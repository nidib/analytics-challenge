import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import './styles.css';

const ArrowRight = ({ symbol }) => {
  return (
    // Replace with `Link`
    <Link to={`/view/?symbol=${symbol}`}>
      <div className="arrow-right" />
    </Link>
  );
};

ArrowRight.propTypes = {
  symbol: propTypes.string.isRequired,
};

export default ArrowRight;
