import React from 'react';
import propTypes from 'prop-types';

import { formatToMoney } from '../Chart/commonChartData';

import './styles.css';

const CompanyTitle = ({ companiesProfiles }) => {
  return (
    <>
      {
        companiesProfiles.map((companyProfile, index) => {
          return (
            <div key={companyProfile.symbol}>
              <div className="company-title">
                <img src={companyProfile.image} alt={`${companyProfile.symbol} logo`} />
                <h3>
                  {`${companyProfile.companyName} | ${companyProfile.symbol}`}
                  <span className="quote">{formatToMoney(companyProfile.price)}</span>
                </h3>
              </div>
              {((companiesProfiles.length > 1) && (index < companiesProfiles.length - 1)) && <div className="vs">vs</div>}
            </div>
          );
        })
      }
    </>
  );
};

CompanyTitle.propTypes = {
  companiesProfiles: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CompanyTitle;
