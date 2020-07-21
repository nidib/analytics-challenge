import React from 'react';

import './styles.css';

function handleCheckboxClick({ target }) {
  const selectedStocks = document.querySelector('ul#selected');

  target.classList.add('checked');
  setTimeout(() => {
    target.classList.remove('checked');
  }, 500);

  const selectedStockToBeAdded = document.createElement('li');
  selectedStockToBeAdded.classList.add('remove-selected');
  selectedStockToBeAdded.title = 'Remove item';
  selectedStockToBeAdded.addEventListener('click', (e) => {
    e.target.parentElement.removeChild(e.target);
  });
  selectedStockToBeAdded.id = target.parentElement.parentElement.id;
  selectedStockToBeAdded.innerText = target.parentElement.parentElement.id;

  if (!Array.from(selectedStocks.childNodes).some((child) => child.id === target.parentElement.parentElement.id) && Array.from(selectedStocks.childNodes).length < 3) {
    selectedStocks.appendChild(selectedStockToBeAdded);
  }
}

const Checkbox = () => {
  return (
    <button id="checkbox-btn" type="button" className="checkbox" onClick={handleCheckboxClick}>o</button>
  );
};

export default Checkbox;
