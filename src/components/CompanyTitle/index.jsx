import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

const CompanyTitle = ({ companySymbol, companyName, companyLogo }) => {
  return (
    <div className="company-title">
      <img src={companyLogo} alt={`${companySymbol} logo`} />
      <h3>
        {`${companyName} | ${companySymbol}`}
      </h3>
    </div>
  );
};

CompanyTitle.propTypes = {
  companySymbol: propTypes.string.isRequired,
  companyName: propTypes.string.isRequired,
  companyLogo: propTypes.string.isRequired,
};

export default CompanyTitle;
