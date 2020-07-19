import React from 'react';

import './styles.css';

const TableHeader = () => {
  return (
    <tr className="table-header">
      <th aria-label="Select to compare" />
      <th>Symbol</th>
      <th>Name</th>
      <th>Price</th>
      <th aria-label="Click to view" />
    </tr>
  );
};

export default TableHeader;
