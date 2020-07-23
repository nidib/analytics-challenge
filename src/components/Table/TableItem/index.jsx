import React from 'react';
import propTypes from 'prop-types';

import Checkbox from './Checkbox';
import ArrowRight from './ArrowRight';

import './styles.css';

const TableItem = ({ symbol, name, price, selectedStocks, setSelectedStocks }) => {
  return (
    <tr id={symbol} className="table-item">
      <td>
        <Checkbox selectedStocks={selectedStocks} setSelectedStocks={setSelectedStocks} />
      </td>
      <td>{symbol}</td>
      <td>{name}</td>
      <td>{`$${price.toFixed(2)}`}</td>
      <td>
        <ArrowRight symbol={symbol} />
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  symbol: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default TableItem;
