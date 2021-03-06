import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TableHeader from './TableHeader';
import TableItem from './TableItem';
import Loading from '../Loading';

import fetchData from '../../services/api';

import './styles.css';

const Table = () => {
  const [stockList, setStockList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState([]);

  function handleSearch(e) {
    const inputSearch = e.target.value.trim();
    setSearch(inputSearch);
  }

  function CompareButton() {
    const history = useHistory();

    function handleCompareButtonClick(e) {
      if (selectedStocks.length > 0) {
        history.push(`/view/?symbol=${selectedStocks.join()}`);
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
    async function getCompaniesFinancials() {
      try {
        const data = await fetchData(`https://financialmodelingprep.com/api/v3/company/stock/list?apikey=${process.env.REACT_APP_API_KEY}`);
        if (data.symbolsList.length > 0) {
          setStockList(data.symbolsList);
          setError(false);
        } else {
          console.log('Probably API key or wrong route');
          setError(true);
        }
      } catch (err) {
        console.log('Could not fetch from API');
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getCompaniesFinancials();
  }, []);

  function handleSelectedStockClick(e) {
    // Removes clicked selected Stock
    const copyOfSelected = [...selectedStocks];
    const idOfItemToBeRemoved = e.target.id;
    const indexOfItemToBeRemoved = copyOfSelected.indexOf(idOfItemToBeRemoved);
    if (indexOfItemToBeRemoved > -1) {
      copyOfSelected.splice(indexOfItemToBeRemoved, 1);
    }
    setSelectedStocks(copyOfSelected);
  }

  useEffect(() => {
    setFilteredStocks(stockList.filter(({ symbol, name }) => {
      return String(symbol).toLowerCase().includes(search.toLowerCase()) || String(name).toLowerCase().includes(search.toLowerCase());
    }));
  }, [search, stockList]);

  if (error) return <p>There was an error...</p>;
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
                    selectedStocks={selectedStocks}
                    setSelectedStocks={setSelectedStocks}
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
      <ul id="selected">
        {
          selectedStocks.map((selectedStock) => {
            return (
              <li key={selectedStock}>
                <button
                  type="button"
                  title="Remove from selection"
                  id={selectedStock}
                  onClick={handleSelectedStockClick}
                >
                  {selectedStock}
                </button>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default Table;
