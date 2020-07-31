import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  let symbols = new URLSearchParams(location.search).get('symbol');
  // Removes trailing comma when receiving more than one symbol (to prevent overload from API)
  symbols = symbols.split(',').filter((symbol) => symbol).join();
  if (symbols) {
    symbols = symbols.split(',').length === 1 ? `${symbols},` : symbols;
  }

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
          error && (
          <>
            <p>Something is wrong...</p>
            <Link to="/">Go home</Link>
          </>
          )
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
