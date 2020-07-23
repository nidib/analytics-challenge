import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

function handleCheckBoxClick(e, selected, set) {
  const elmnt = e.target;
  elmnt.classList.add('checked');
  setTimeout(() => {
    elmnt.classList.remove('checked');
  }, 500);

  if (!(selected.includes(elmnt.parentElement.parentElement.id)) && selected.length < 3) {
    set([...selected, elmnt.parentElement.parentElement.id]);
  }
}

const Checkbox = ({ selectedStocks, setSelectedStocks }) => {
  return (
    <button
      aria-label="Add to selection"
      id="checkbox-btn"
      type="button"
      className="checkbox"
      onClick={(e) => handleCheckBoxClick(e, selectedStocks, setSelectedStocks)}
    />
  );
};

Checkbox.propTypes = {
  selectedStocks: propTypes.arrayOf(propTypes.string).isRequired,
  setSelectedStocks: propTypes.func.isRequired,
};

export default Checkbox;
