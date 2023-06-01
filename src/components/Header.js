import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import {useAuthenticator } from '@aws-amplify/ui-react';

function Header() {
    const { signOut } = useAuthenticator((context)=> [context.signOut]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
    return (
    
    <div className='header'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      {/* <img/> */}
      <div className='container'>
        <div className='header__wrapper'>
            
            <Link to='/'><img id='header_logo' src={require('./logo-no-background.png')} alt='1'/></Link>
            
            <div className='header__nav'>
                {/* <a href='#'>About</a> */}
                <Link to='/article'>Articles</Link>
                <Link to='/uni'>Universities</Link>
                <div className="header__dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={closeDropdown}>
                <Link to='/profile'>Profile</Link>
                    {isDropdownOpen && (
                    <div className="dropdown-content">
                      {/* Add dropdown content here */}
                      <Link to="/profile/leaderboard">Leaderboard</Link>
                    </div>
                  )}
                </div>
            </div>
        
            <div className='header__btns'>
              
                <button className='btn' onClick={signOut}>Sign out</button>
            </div>
            
        </div>
      </div>
      
      
    </div>
  )
}

export default Header
