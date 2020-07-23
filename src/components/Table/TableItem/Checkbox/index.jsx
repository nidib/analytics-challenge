import React from 'react';

import './styles.css';

function handleCheckBoxClick(e, selected, set) {
  // Adds clicked selected Stock
  if (!(selected.includes(e.target.parentElement.parentElement.id)) && selected.length < 3) {
    set([...selected, e.target.parentElement.parentElement.id]);
  }
}

const Checkbox = () => {
  return (
    <button
      id="checkbox-btn"
      type="button"
      className="checkbox"
      onClick={(e) => handleCheckBoxClick(e, selectedStocks, setSelectedStocks)}
    >o</button>
  );
};

export default Checkbox;
