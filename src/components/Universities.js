import React from 'react'
import './Universities.css'
import './Banner.css'
import { useState } from 'react';

function Filter({ title, info }) {
    const [isRotated, setIsRotated] = useState(false);
  
    const handleButtonClick = () => {
      setIsRotated(!isRotated);
    };
  
    return (
      <div className='uni__filter__container'>
        <div className='filter__title'>
          <button className={isRotated ? 'rotate' : ''} onClick={handleButtonClick}>
            <span>{title}</span>
            <img src="images/arrow.png" alt="arrow greater than" style={{ transform: isRotated ? 'rotate(90deg)' : 'rotate(0deg)' }}/>
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

function Universities() {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const handleRangeChange = (e) => {
        const value = e.target.value;
        if (value === '100') {
        setMaxValue('No Max');
        } else {
        setMaxValue(value);
        }
        setMinValue(value);
    };
  return (
    
    <div className='university'>
        <div className='banner'>
            <div className='banner__image '>
                <img src='images/uniss.jpg' alt='banner'/>
            </div>


            <div className='container'>

                <div className='banner__wrap'>
                <h1>Universities</h1>
                <p>Browse through 1,000 of programs </p>
                    
                </div>
            </div>
        </div>
        
        <div className='uni__two'>

            <div className='uni__wrap'>
                <div className='sidebar container'>
                    <div className='uni__filter'>
                            
                        <Filter title='Location' info={
                            <div className='filter__info'>
                                <input type='text' placeholder="Enter state or country"/>
                            </div>
                        } />

                        <Filter title='Region' info={
                            <div>
                            <div className='checkbox__container'>
                                <input id='region-europe' type='checkbox'/>
                                <label>Europe</label>
                            </div>
                            <div className='checkbox__container'>
                                <input id='region-europe' type='checkbox'/>
                                <label>Asia</label>
                            </div>
                            <div className='checkbox__container'>
                                <input id='region-europe' type='checkbox'/>
                                <label>West</label>
                            </div>
                            <div className='checkbox__container'>
                                <input id='region-europe' type='checkbox'/>
                                <label>Australia</label>
                            </div>
                            <div className='checkbox__container'>
                                <input id='region-europe' type='checkbox'/>
                                <label>South</label>
                            </div>
                            </div>
                        }/>

                        <Filter title='Tuition Fee' info={
                            <div> 
                                <div className='tuition__text'>
                                    <div className='tuition__numb'> 
                                        <input inputMode='numeric' placeholder='0' value={minValue+'$'} readOnly/>
                                        <label>Amount</label>
                                    </div>

                                </div>
                                <input className='' type='range' min='0' max='50000' onChange={handleRangeChange}/>
                            </div>
                        } />
                    
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='uni__lists__title'>
                   
                    <h1>6 universities found</h1>

                    <div>
                        
                    <details class="custom-select">
                        <summary class="radios">
                            <input type="radio" name="item" id="default" title="Uni. name, A to Z" checked/>
                            <input type="radio" name="item" id="item1" title="Uni. name, A to Z"/>
                            <input type="radio" name="item" id="item2" title="Uni. name, Z to A"/>
                        </summary>
                        <ul class="list">
                            <li>
                                <label for="item1">
                                Uni. name, A to Z 
                                    <span></span>
                                </label>
                            </li>
                            <li>
                                <label for="item2">Uni. name, Z to A</label>
                            </li>
                        </ul>
                    </details>



                    </div>
                </div>

                <div className='uni__lists'>
                    <div className='uni__list__items'>
                        <div className='uni__list__item'>
                            <img src="images/uni1.jpg"/>
                            <div className='uni__list__text'>
                                <h1>Bishop's University</h1>
                                <p>Sherbrooke, Canada</p>
                            </div>
                        </div>

                        <div className='uni__list__item'>
                            <img src="images/uni2.jpg"/>
                            <div className='uni__list__text'>
                                <h1>Queen's University</h1>
                                <p>Kingston, Canada</p>
                            </div>
                        </div>

                        <div className='uni__list__item'>
                            <img src="images/uni3.jpg"/>
                            <div className='uni__list__text'>
                                <h1>St. Thomas University</h1>
                                <p>Fredericton, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='uni__lists'>
                    <div className='uni__list__items'>
                        <div className='uni__list__item'>
                            <img src="images/uni4.png"/>
                            <div className='uni__list__text'>
                                <h1>Dominican University of California</h1>
                                <p>San Rafael, USA</p>
                            </div>
                        </div>

                        <div className='uni__list__item'>
                            <img src="images/uni5.png"/>
                            <div className='uni__list__text'>
                                <h1>The University of Utah</h1>
                                <p>SALT LAKE CITY, USA</p>
                            </div>
                        </div>

                        <div className='uni__list__item'>
                            <img src="images/uni6.jpg"/>
                            <div className='uni__list__text'>
                                <h1>University of Colorado</h1>
                                <p>Boulder, USA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
        </div>
    </div>
  )
}

export default Universities
