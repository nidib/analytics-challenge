import React from 'react';
import numeral from 'numeral';
import propTypes from 'prop-types';

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
                  <span className="quote">{numeral(companyProfile.price).format('$0,0')}</span>
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
