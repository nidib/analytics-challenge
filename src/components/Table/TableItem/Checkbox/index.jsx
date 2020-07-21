import React from 'react';

import './styles.css';

const listOfSelected = document.querySelector('ul#selected');

function handleCheckboxClick({ target }) {
  target.classList.add('checked');
  setTimeout(() => {
    target.classList.remove('checked');
  }, 500);

  const elementToBeSelected = document.createElement('li');
  elementToBeSelected.classList.add('remove-selected');
  elementToBeSelected.title = 'Remove item';
  elementToBeSelected.id = target.parentElement.parentElement.id;
  elementToBeSelected.innerText = target.parentElement.parentElement.id;
  elementToBeSelected.addEventListener('click', (e) => {
    e.target.parentElement.removeChild(e.target);
  });

  if (!Array.from(listOfSelected.childNodes).some((child) => child.id === target.parentElement.parentElement.id) && Array.from(listOfSelected.childNodes).length < 3) {
    listOfSelected.appendChild(elementToBeSelected);
  }
}

const Checkbox = () => {
  return (
    <button id="checkbox-btn" type="button" className="checkbox" onClick={handleCheckboxClick}>o</button>
  );
};

export default Checkbox;
