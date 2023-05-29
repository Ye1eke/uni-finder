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
import { Flex, Text } from '@aws-amplify/ui-react';

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
  const [tuitionFeeRange, setTuitionFeeRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('');
  const [minTuitionFee, setMinTuitionFee] = useState('');
  const [maxTuitionFee, setMaxTuitionFee] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const countriesData = [
    { id: '1', name: 'Argentina', region: 'South America' },
    { id: '2', name: 'Armenia', region: 'Europe' },
    { id: '3', name: 'Australia', region: 'Oceania' },
    { id: '4', name: 'Austria', region: 'Europe' },
    { id: '5', name: 'Azerbaijan', region: 'Europe' },
    { id: '6', name: 'Bahrain', region: 'Asia' },
    { id: '7', name: 'Bangladesh', region: 'Asia' },
    { id: '8', name: 'Belarus', region: 'Europe' },
    { id: '9', name: 'Belgium', region: 'Europe' },
    { id: '10', name: 'Bolivia', region: 'South America' },
    // Add more countries below
    { id: '11', name: 'Bosnia & Herzegovina', region: 'Europe' },
    { id: '12', name: 'Brazil', region: 'South America' },
    { id: '13', name: 'Brunei', region: 'Asia' },
    { id: '14', name: 'Bulgaria', region: 'Europe' },
    { id: '15', name: 'Canada', region: 'North America' },
    { id: '16', name: 'Chile', region: 'South America' },
    { id: '17', name: 'China', region: 'Asia' },
    { id: '18', name: 'Colombia', region: 'South America' },
    { id: '19', name: 'Costa Rica', region: 'North America' },
    { id: '20', name: 'Croatia', region: 'Europe' },
    { id: '21', name: 'Cuba', region: 'North America' },
    { id: '22', name: 'Cyprus', region: 'Europe' },
    { id: '23', name: 'Czechia', region: 'Europe' },
    { id: '24', name: 'Denmark', region: 'Europe' },
    { id: '25', name: 'Dominican Republic', region: 'North America' },
    { id: '26', name: 'Ecuador', region: 'South America' },
    { id: '27', name: 'Egypt', region: 'Africa' },
    { id: '28', name: 'Estonia', region: 'Europe' },
    { id: '29', name: 'Finland', region: 'Europe' },
    { id: '30', name: 'France', region: 'Europe' },
    { id: '31', name: 'Georgia', region: 'Europe' },
    { id: '32', name: 'Germany', region: 'Europe' },
    { id: '33', name: 'Ghana', region: 'Africa' },
    { id: '34', name: 'Greece', region: 'Europe' },
    { id: '35', name: 'Guatemala', region: 'North America' },
    { id: '36', name: 'Honduras', region: 'North America' },
    { id: '37', name: 'Hong Kong SAR', region: 'Asia' },
    { id: '38', name: 'Hungary', region: 'Europe' },
    { id: '39', name: 'India', region: 'Asia' },
    { id: '40', name: 'Indonesia', region: 'Asia' },
    { id: '41', name: 'Iran', region: 'Asia' },
    { id: '42', name: 'Iraq', region: 'Asia' },
    { id: '43', name: 'Ireland', region: 'Europe' },
    { id: '44', name: 'Israel', region: 'Asia' },
    { id: '45', name: 'Italy', region: 'Europe' },
    { id: '46', name: 'Japan', region: 'Asia' },
    { id: '47', name: 'Jordan', region: 'Asia' },
    { id: '48', name: 'Kazakhstan', region: 'Asia' },
    { id: '49', name: 'Kenya', region: 'Africa' },
    { id: '50', name: 'Kuwait', region: 'Asia' },
    { id: '51', name: 'Kyrgyzstan', region: 'Asia' },
    { id: '52', name: 'Latvia', region: 'Europe' },
    { id: '53', name: 'Lebanon', region: 'Asia' },
    { id: '54', name: 'Lithuania', region: 'Europe' },
    { id: '55', name: 'Macau SAR', region: 'Asia' },
    { id: '56', name: 'Malaysia', region: 'Asia' },
    { id: '57', name: 'Malta', region: 'Europe' },
    { id: '58', name: 'Mexico', region: 'North America' },
    { id: '59', name: 'Morocco', region: 'Africa' },
    { id: '60', name: 'Netherlands', region: 'Europe' },
    { id: '61', name: 'New Zealand', region: 'Oceania' },
    { id: '62', name: 'Norway', region: 'Europe' },
    { id: '63', name: 'Oman', region: 'Asia' },
    { id: '64', name: 'Pakistan', region: 'Asia' },
    { id: '65', name: 'Palestinian Territories', region: 'Asia' },
    { id: '66', name: 'Panama', region: 'North America' },
    { id: '67', name: 'Paraguay', region: 'South America' },
    { id: '68', name: 'Peru', region: 'South America' },
    { id: '69', name: 'Philippines', region: 'Asia' },
    { id: '70', name: 'Poland', region: 'Europe' },
    { id: '71', name: 'Portugal', region: 'Europe' },
    { id: '72', name: 'Puerto Rico', region: 'North America' },
    { id: '73', name: 'Qatar', region: 'Asia' },
    { id: '74', name: 'Romania', region: 'Europe' },
    { id: '75', name: 'Russia', region: 'Europe' },
    { id: '76', name: 'Saudi Arabia', region: 'Asia' },
    { id: '77', name: 'Serbia', region: 'Europe' },
    { id: '78', name: 'Singapore', region: 'Asia' },
    { id: '79', name: 'Slovakia', region: 'Europe' },
    { id: '80', name: 'Slovenia', region: 'Europe' },
    { id: '81', name: 'South Africa', region: 'Africa' },
    { id: '82', name: 'South Korea', region: 'Asia' },
    { id: '83', name: 'Spain', region: 'Europe' },
    { id: '84', name: 'Sri Lanka', region: 'Asia' },
    { id: '85', name: 'Sweden', region: 'Europe' },
    { id: '86', name: 'Switzerland', region: 'Europe' },
    { id: '87', name: 'Taiwan', region: 'Asia' },
    { id: '88', name: 'Thailand', region: 'Asia' },
    { id: '89', name: 'Trinidad and Tobago', region: 'North America' },
    { id: '90', name: 'Tunisia', region: 'Africa' },
    { id: '91', name: 'Turkey', region: 'Europe' },
    { id: '92', name: 'Ukraine', region: 'Europe' },
    { id: '93', name: 'United Arab Emirates', region: 'Asia' },
    { id: '94', name: 'United Kingdom', region: 'Europe' },
    { id: '95', name: 'United States', region: 'North America' },
    { id: '96', name: 'Uruguay', region: 'South America' },
    { id: '97', name: 'Uzbekistan', region: 'Asia' },
    { id: '98', name: 'Venezuela', region: 'South America' },
    { id: '99', name: 'Vietnam', region: 'Asia' },
    { id: '100', name: 'Yemen', region: 'Asia' },
  ];
  
  
  useEffect(() => {
    // Initialize the items with all universities
    setItems(itemsDataStore);

    let filteredItems = itemsDataStore;

    // Apply location filter
    if (locations.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        locations.includes(item.region)
      );
    }
    // Apply country filter
    if (selectedCountry.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedCountry.includes(item.country)
      );
    }

    // Apply tuition fee filter
    if (minTuitionFee !== '') {
      filteredItems = filteredItems.filter((item) => item.price >= parseInt(minTuitionFee));
    }
    
    if (maxTuitionFee !== '') {
      filteredItems = filteredItems.filter((item) => item.price <= parseInt(maxTuitionFee));
    }
    
    // Apply sorting
    if (sortBy === "asc") {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "desc") {
      filteredItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "ranking") {
      filteredItems.sort((a, b) => a.ranking - b.ranking);
    }
    let sortedItems = [...filteredItems];
    setItems(sortedItems);
  }, [selectedCountry, locations, minTuitionFee, maxTuitionFee, sortBy, itemsDataStore]);

  const handleLocationChange = (e) => {
    const { id, checked } = e.target;
    setLocations((prevLocations) => {
      if (checked) {
        setSelectedCountry(''); 
        setSelectedRegion(id);
        return [...prevLocations, id];
      } else {
        setSelectedRegion('');
        return prevLocations.filter((location) => location !== id);
      }
    });
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  
  const handleMinTuitionFeeInput = (e) => {
    const inputText = e.target.value;
    const numericValue = inputText.replace(/\D/g, ''); // Remove non-numeric characters

    setMinTuitionFee(numericValue !== '' ? parseInt(numericValue) : null);
  };

  const handleMaxTuitionFeeInput = (e) => {
    const inputText = e.target.value;
    const numericValue = inputText.replace(/\D/g, ''); // Remove non-numeric characters

    setMaxTuitionFee(numericValue !== '' ? parseInt(numericValue) : null);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="unis">
      <Banner
        img={"images/uniss.jpg"}
        title={"Explore the Ultimate University Collection"}
        subTitle={
          "Unlock a World of Possibilities: Discover, Compare, and Choose Your Ideal University"
        }
      />
      <div className="uni__collection">
        <div className="uni__two">
          <div className="uni__wrap">
            <div className="sidebar container">
              <div className="uni__filter">
                <div className="sort__container">
                  <label htmlFor="sort-select">Sort by:</label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={handleSortChange}
                  >
                    <option value="">---</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    <option value="ranking">Ranking</option>
                  </select>
                </div>

                <Filter
                  title="Region"
                  info={
                    <div>
                      <div className="checkbox__container">
                        <input
                          id="Europe"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>Europe</label>
                      </div>
                      <div className="checkbox__container">
                        <input
                          id="Asia"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>Asia</label>
                      </div>
                      <div className="checkbox__container">
                        <input
                          id="North America"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>North America</label>
                      </div>
                      <div className="checkbox__container">
                        <input
                          id="South America"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>South America</label>
                      </div>
                      <div className="checkbox__container">
                        <input
                          id="Oceania"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>Oceania</label>
                      </div>
                      <div className="checkbox__container">
                        <input
                          id="Africa"
                          type="checkbox"
                          onChange={handleLocationChange}
                        />
                        <label>Africa</label>
                      </div>
                    </div>
                  }
                />

                <Filter
                  title='Country'
                  info={
                    <div >
                  <select
                    id='sort-select'
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option value=''>All</option>
                    {countriesData
                      .filter((country) =>
                        selectedRegion
                          ? country.region === selectedRegion
                          : true
                      )
                      .map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                  </select>
                </div>
                  }
                />

                <Filter
                  title="Tuition Fee"
                  info={
                    <div className='range__container'>
                    <div className='tuition__numb'>
                      <input
                        type='text'
                        pattern='[0-9]*'
                        placeholder=''
                        value={minTuitionFee !== null ? minTuitionFee + '$' : ''}
                        onInput={handleMinTuitionFeeInput}
                      />
                      <label>Min</label>
                    </div>
                    <input
                      className='range__input'
                      type='range'
                      min='0'
                      max='50000'
                      value={minTuitionFee !== null ? minTuitionFee : 0}
                      onChange={handleMinTuitionFeeInput}
                    />
                    <div className='tuition__numb'>
                      <input
                        type='text'
                        pattern='[0-9]*'
                        placeholder=''
                        value={maxTuitionFee !== null ? maxTuitionFee + '$' : ''}
                        onInput={handleMaxTuitionFeeInput}
                      />
                      <label>Max</label>
                    </div>
                    <input
                      className='range__input'
                      type='range'
                      min='0'
                      max='50000'
                      value={maxTuitionFee !== null ? maxTuitionFee : 0}
                      onChange={handleMaxTuitionFeeInput}
                    />
                  </div>
                  }
                />
              </div>
            </div>
          </div>
          <div className='container'>
          <UnisCardCollection items={items}
            searchNoResultsFound={
              <Flex justifyContent="center">
                <Text color="purple.80" fontSize="1rem">
                  Nothing found, please try again
                </Text>
              </Flex>
            }
            searchPlaceholder="Type to search..."
          />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Unis;
