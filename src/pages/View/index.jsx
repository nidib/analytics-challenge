import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import Header from '../../components/Header';
import CompanyTitle from '../../components/CompanyTitle';
import RevenueChart from '../../components/Chart/RevenueChart';
import EbitdaChart from '../../components/Chart/EbitdaChart';
import GeneralBalance from '../../components/Chart/GeneralBalance';
import Footer from '../../components/Footer';

import fetchData from '../../services/api';

const View = () => {
  const [companiesToBeViewed, setCompaniesToBeViewed] = useState([]);
  const [companiesProfiles, setCompaniesProfiles] = useState([]);
  const [error, setError] = useState(false);

  // Get params from url using keyword `symbol`
  const params = queryString.parse(window.location.search);
  let symbols = params.symbol;
  symbols = symbols.split(',').length === 1 ? `${symbols},` : symbols.split(',').join();

  useEffect(() => {
    async function getCompaniesFinancials() {
      try {
        const data = await fetchData(`https://financialmodelingprep.com/api/v3/financials/income-statement/${symbols}?apikey=${process.env.REACT_APP_API_KEY}`);
        if (data.financialStatementList.length > 0) {
          setCompaniesToBeViewed(data.financialStatementList);
          setError(false);
        } else {
          console.log('Probably API key or wrong route');
          setError(true);
        }
      } catch (err) {
        console.log('Could not fetch from API');
        setError(true);
      }
    }
    async function geCompaniesProfiles() {
      try {
        const data = await fetchData(`https://financialmodelingprep.com/api/v3/profile/${symbols}?apikey=${process.env.REACT_APP_API_KEY}`);
        if (data.length > 0) {
          setCompaniesProfiles(data);
        } else {
          console.log('Probably API key or wrong route');
          setCompaniesProfiles([]);
        }
      } catch (err) {
        console.log('Could not fetch from API');
      }
    }

    getCompaniesFinancials();
    geCompaniesProfiles();
  }, []);

  return (
    <>
      <Header />
      <main id="charts">
        {
          error && <p>Something is wrong...</p>
        }
        {
          !error && (
          <>
            <CompanyTitle companiesProfiles={companiesProfiles} />
            <RevenueChart companyStock={companiesToBeViewed} />
            <EbitdaChart companyStock={companiesToBeViewed} />
            <GeneralBalance companyStock={companiesToBeViewed} />
          </>
          )
        }
      </main>
      <Footer />
    </>
  );
};

export default View;
