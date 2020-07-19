import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import stocks from '../../services/stocks';

import Header from '../../components/Header';
import CompanyTitle from '../../components/CompanyTitle';
import RevenueChart from '../../components/Chart/RevenueChart';
import EbitdaChart from '../../components/Chart/EbitdaChart';
import Footer from '../../components/Footer';

import api from '../../services/api';

const View = () => {
  const [companyToBeViewed, setCompanyToBeViewed] = useState([]);
  const params = queryString.parse(window.location.search);
  const { symbol } = params;

  useEffect(() => {
    api.get(`v3/income-statement/${symbol}?apikey=50685ed6422c4ba4c0ff0875c2b76097`).then(((response) => {
      setCompanyToBeViewed(response.data);
    }));
  }, []);

  function getCompanyName(stockList) {
    const [stockObjectFiltered] = stockList.filter((stockItem) => stockItem.symbol === symbol);
    return (stockObjectFiltered) ? stockObjectFiltered.name : undefined;
  }
  const companyName = getCompanyName(stocks);

  return (
    <>
      <Header />
      {(!(symbol && companyName)) && <p className="error">There was an error loading the charts</p>}
      <main id="charts">
        {(symbol && companyName) && <CompanyTitle companyName={companyName} companySymbol={symbol} />}
        {(symbol && companyName) && <RevenueChart companyStock={companyToBeViewed} />}
        {(symbol && companyName) && <EbitdaChart companyStock={companyToBeViewed} zero={10} />}
      </main>
      <Footer />
    </>
  );
};

export default View;
