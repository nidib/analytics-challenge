import React from 'react';

import TableHeader from './TableHeader';
import TableItem from './TableItem';

// Future fetch all stocks from api
import stocks from '../../services/stocks';

import './styles.css';

const Table = () => {
  return (
    <div className="limiter">
      <table className="stock-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {
            stocks.map((stockItem) => {
              return (
                <TableItem
                  key={stockItem.symbol}
                  symbol={stockItem.symbol}
                  name={stockItem.name}
                  price={stockItem.price}
                />
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
