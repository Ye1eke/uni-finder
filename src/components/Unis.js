import React, { useState, useEffect } from 'react';
import './Banner.css';
import './Unis.css';
import './Universities.css';

import Banner from './Banner';
import { UnisCardCollection } from '../ui-components';
import { UniItem } from '../models';
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";

function Filter({ title, info, handleFilterChange }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className='uni__filter__container'>
      <div className='filter__title'>
        <button className={isRotated ? 'rotate' : ''} onClick={handleButtonClick}>
          <span>{title}</span>
          <img id="green_arrow" src="images/arrow.png" alt="arrow greater than" style={{ transform: isRotated ? 'rotate(90deg)' : 'rotate(0deg)' }}/>
        </button>
      </div>
      {isRotated && (
        <div className='filter__info'>
          {info}
        </div>
      )}
    </div>
  );
}

function Unis() {
  const [items, setItems] = useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: UniItem,
  }).items;

  const [locations, setLocations] = useState([]);
  const [tuitionFee, setTuitionFee] = useState(0);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Initialize the items with all universities
    setItems(itemsDataStore);

    let filteredItems = itemsDataStore;

    // Apply location filter
    if (locations.length > 0) {
      filteredItems = filteredItems.filter(item =>
        locations.includes(item.location)
      );
    }

    // Apply tuition fee filter
    filteredItems = filteredItems.filter(
      item => item.price >= tuitionFee
    );

    // Apply sorting
    if (sortBy === 'asc') {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'desc') {
      filteredItems.sort((a, b) => b.name.localeCompare(a.name));
    }

    setItems(filteredItems);
  }, [locations, tuitionFee, sortBy, itemsDataStore]);

  const handleLocationChange = e => {
    const { id, checked } = e.target;
    setLocations(prevLocations => {
      if (checked) {
        return [...prevLocations, id];
      } else {
        return prevLocations.filter(location => location !== id);
      }
    });
  };

  const handleTuitionFeeChange = e => {
    setTuitionFee(parseInt(e.target.value));
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  return (
    <div className='unis'>
      <Banner img={'images/uniss.jpg'} title={'Explore the Ultimate University Collection'} subTitle={'Unlock a World of Possibilities: Discover, Compare, and Choose Your Ideal University'} />
      <div className='uni__collection'>
        <div className='uni__two'>
          <div className='uni__wrap'>
            <div className='sidebar container'>
              <div className='uni__filter'>

                <div className="sort__container">
                  <label htmlFor="sort-select">Sort by:</label>
                  <select id="sort-select" value={sortBy} onChange={handleSortChange}>
                    <option value="">---</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                  </select>
                </div>

                <Filter title='Region' info={
                  <div>
                    <div className='checkbox__container'>
                      <input id='Europe' type='checkbox' onChange={handleLocationChange} />
                      <label>Europe</label>
                    </div>
                    <div className='checkbox__container'>
                      <input id='Asia' type='checkbox' onChange={handleLocationChange} />
                      <label>Asia</label>
                    </div>
                    <div className='checkbox__container'>
                      <input id='West' type='checkbox' onChange={handleLocationChange} />
                      <label>West</label>
                    </div>
                    <div className='checkbox__container'>
                      <input id='Australia' type='checkbox' onChange={handleLocationChange} />
                      <label>Australia</label>
                    </div>
                    <div className='checkbox__container'>
                      <input id='South' type='checkbox' onChange={handleLocationChange} />
                      <label>South</label>
                    </div>
                  </div>
                } />

                <Filter title='Tuition Fee' info={
                  <div>
                    <div className='tuition__text'>
                      <div className='tuition__numb'>
                        <input inputMode='numeric' placeholder='' value={tuitionFee + '$'} readOnly />
                        <label>Amount</label>
                      </div>
                    </div>
                    <input className='' type='range' min='0' max='50000' onChange={handleTuitionFeeChange} />
                  </div>
                } />

              </div>
            </div>
          </div>
            <UnisCardCollection items={items} />
          
        </div>
      </div>
    </div>
  );
}

export default Unis;
