import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TableHeader from './TableHeader';
import TableItem from './TableItem';
import Loading from '../Loading';

import api from '../../services/api';

import './styles.css';

const Table = () => {
  const [stockList, setStockList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredStocks, setFilteredStocks] = useState([]);

  function handleSearch(e) {
    console.log(e.target.value);
    const inputSearch = e.target.value.trim();
    setSearch(inputSearch);
  }

  function CompareButton() {
    const history = useHistory();

    function handleCompareButtonClick(e) {
      const arr = [];
      (Array.from(document.querySelector('ul#selected').childNodes)).forEach((item) => {
        arr.push(item.id);
      });
      if (arr.length > 0) {
        history.push(`/view/?symbol=${arr.join()}`);
      } else {
        e.preventDefault();
        window.alert('Select at least one stock to view');
      }
    }

    return (
      <button type="button" onClick={handleCompareButtonClick}>View</button>
    );
  }

  useEffect(() => {
    api.get(`company/stock/list?apikey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        if (response.data.symbolsList) {
          setStockList(response.data.symbolsList);
          setLoading(false);
        } else {
          setStockList([]);
          setLoading(true);
        }
      });
  }, []);
  console.log(stockList);

  useEffect(() => {
    setFilteredStocks(stockList.filter(({ symbol, name }) => {
      return String(symbol).toLowerCase().includes(search.toLowerCase()) || String(name).toLowerCase().includes(search.toLowerCase());
    }));
  }, [search, stockList]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="search-bar">
        <div className="search-box">
          <div className="magnifier" />
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
        <CompareButton type="button">Compare</CompareButton>
      </div>
      <div className="limiter">
        <table className="stock-table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {
              filteredStocks.slice(0, 10).map(({ symbol, name, price }) => {
                return (
                  <TableItem
                    key={symbol}
                    symbol={symbol}
                    name={name}
                    price={price}
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
      <ul id="selected" />
    </>
  );
};

export default Table;
