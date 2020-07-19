import React from 'react';

import './styles.css';

function handleCheckboxClick({ target }) {
  target.classList.toggle('checked');

  const compareButton = document.querySelector('.search-bar button');

  if (document.querySelectorAll('.checked').length >= 2) {
    compareButton.classList.remove('disabled');
  } else {
    compareButton.classList.add('disabled');
  }
}

const Checkbox = () => {
  return (
    <button id="checkbox-btn" type="button" className="checkbox" onClick={handleCheckboxClick}>o</button>
  );
};

export default Checkbox;
