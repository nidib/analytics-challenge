import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import Loading from '../../components/Loading';
import Header from '../../components/Header';
import CompanyTitle from '../../components/CompanyTitle';
import RevenueChart from '../../components/Chart/RevenueChart';
import EbitdaChart from '../../components/Chart/EbitdaChart';
import GeneralBalance from '../../components/Chart/GeneralBalance';
import Footer from '../../components/Footer';

import api from '../../services/api';

const View = () => {
  const [companiesToBeViewed, setCompaniesToBeViewed] = useState([]);
  const [companiesProfiles, setCompaniesProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get params from url using keyword `symbol`
  const params = queryString.parse(window.location.search);
  let symbols = params.symbol;
  symbols = symbols.split(',').length === 1 ? `${symbols},` : symbols.split(',').join();

  useEffect(() => {
    // Pulls charts data from API
    api.get(`financials/income-statement/${symbols}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(((response) => {
        if (!(response.data['Error Message'])) {
          setCompaniesToBeViewed(response.data.financialStatementList);
          setLoading(false);
        } else {
          setCompaniesToBeViewed([]);
          setLoading(true);
        }
      }));

    // Pulls companies data from API
    api.get(`profile/${symbols}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(((response) => {
        if ((response.data)) {
          setCompaniesProfiles(response.data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      }));
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <main id="charts">
        <CompanyTitle companiesProfiles={companiesProfiles} />
        <RevenueChart companyStock={companiesToBeViewed} />
        <EbitdaChart companyStock={companiesToBeViewed} />
        <GeneralBalance companyStock={companiesToBeViewed} />
      </main>
      <Footer />
    </>
  );
};

export default View;
