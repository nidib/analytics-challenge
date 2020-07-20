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
  const [companyToBeViewed, setCompanyToBeViewed] = useState([]);
  const [companyName, setCompanyName] = useState(undefined);
  const [companyLogo, setCompanyLogo] = useState('');

  const params = queryString.parse(window.location.search);
  const { symbol } = params;

  useEffect(() => {
    api.get(`v3/financials/income-statement/${symbol}?apikey=109b3e1e77138ebe6cf237168a297c88`).then(((response) => {
      setCompanyToBeViewed(response.data.financials);
    }));
    api.get(`v3/profile/${symbol}?apikey=109b3e1e77138ebe6cf237168a297c88`).then(((response) => {
      setCompanyName(response.data[0].companyName);
      setCompanyLogo(response.data[0].image);
    }));
  }, []);

  if (!(companyName && companyToBeViewed)) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <main id="charts">
        <CompanyTitle companyName={companyName} companySymbol={symbol} companyLogo={companyLogo} />
        <RevenueChart companyStock={companyToBeViewed} />
        <EbitdaChart companyStock={companyToBeViewed} />
        <GeneralBalance companyStock={companyToBeViewed} />
      </main>
      <Footer />
    </>
  );
};

export default View;
