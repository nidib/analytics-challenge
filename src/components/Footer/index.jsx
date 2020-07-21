/* eslint-disable no-trailing-spaces */
import React from 'react';

import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="challenged-by">
        <p>Challenged by&nbsp;</p>
        <a href="https://github.com/ArturSch/desafio-frontend-se-analytics">SoftExpert</a>
      </div>

      <div className="developed-by">
        <p>Developed by&nbsp;</p>
        <a href="https://github.com/nidib">Richard Bidin</a>
      </div>

      <div className="used-apis">
        <ul>
          <li>
            <p>Stock Rates & Financial Infos:&nbsp;</p>
            <a href="https://financialmodelingprep.com/" title="Visit their website">Finacial Modeling Prep</a>
          </li>
          <li>
            <p>Charts:&nbsp;</p>
            <a href="https://www.chartjs.org/" title="Visit their website">Chart.js</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
