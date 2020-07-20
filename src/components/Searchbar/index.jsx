import React from 'react';

import './styles.css';

function handleCompareClick(e) {
  // To do: Use elements's parent tr's id to load next page (Comparing selected ones)
  e.preventDefault();
  document.querySelectorAll('.checkbox.checked').forEach((element) => {
    // console.log(element.closest('tr'));
  });
}

const Searchbar = () => {
  return (
    <div className="search-bar">
      <div className="search-box">
        <div className="magnifier" />
        <input type="text" placeholder="Search" />
      </div>
      <button type="button" onClick={handleCompareClick} className="disabled">Compare</button>
    </div>
  );
};

export default Searchbar;
