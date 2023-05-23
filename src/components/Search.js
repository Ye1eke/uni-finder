import React, { useState } from 'react';
import './Search.css'
import { Link } from "react-router-dom";

function Search() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonIndex) => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(selectedButtons.filter((index) => index !== buttonIndex));
    } else {
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  const isButtonSelected = (buttonIndex) => {
    return selectedButtons.includes(buttonIndex);
  };

  return (
    <div className='container search'>
      <div className='search__title'><h2>Find Your Perfect Fit</h2></div>
      <div className='search__wrap'>
        <input type="text" placeholder="Enter university name"/>
      </div>
      <div className='search__filter '>
        <p>or Search by filter</p>
        
        <button className={isButtonSelected(0) ? 'selected' : ''}
          onClick={() => handleButtonClick(0)}>Small (2,000 and under)</button>
        <button className={isButtonSelected(1) ? 'selected' : ''}
          onClick={() => handleButtonClick(1)}>Medium (2,001 to 14,999)</button>
        <button className={isButtonSelected(2) ? 'selected' : ''}
          onClick={() => handleButtonClick(2)}>Large (15,000+)</button>
        <button className={isButtonSelected(3) ? 'selected' : ''}
          onClick={() => handleButtonClick(3)}>Rural</button>
        <button className={isButtonSelected(4) ? 'selected' : ''}
          onClick={() => handleButtonClick(4)}>Urban</button>
        <button className={isButtonSelected(5) ? 'selected' : ''}
          onClick={() => handleButtonClick(5)}>Suburban</button>
      </div>

      <Link to='/uni'><button className='search__goBtn'><a>Let's go</a></button></Link>
    </div>
  )
}

export default Search
