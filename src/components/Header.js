import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

function Header() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const handleLinkClick = (path) => {
    closeDropdown();
    // Optionally, you can add additional logic here
    // when a link is clicked, such as scroll to top of the page
    window.scrollTo(0, 0);
    navigate(path)
  };
  return (
    <div className='header'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='container'>
        <div className='header__wrapper'>
          <Link to='/'><img id='header_logo' src={require('./logo-no-background.png')} alt='1'/></Link>
          <div className='header__nav'>
            <Link to='/article'>Articles</Link>
            <Link to='/uni'>Universities</Link>
            <Link to='/profile'>Profile</Link>
            <Link to="/profile/leaderboard">Leaderboard</Link>
          </div>
          {dropdownOpen && (
        <div className='dropdown-overlay'>
          <div className='dropdown-content'>
            <button className='collapse-btn' onClick={toggleDropdown}> Close ✖</button>
             <div className='space'></div>
            <Link to='/article' onClick={() => handleLinkClick('/article')}>Articles</Link>
            <Link to='/uni' onClick={() => handleLinkClick('/uni')}>Universities</Link>
            <Link to='/profile' onClick={() => handleLinkClick('/profile')}>Profile</Link>
            <Link to="/profile/leaderboard" onClick={() => handleLinkClick('/profile/leaderboard')}>Leaderboard</Link>
            <Link to="/profile/account" onClick={() => handleLinkClick('/profile/account')}>Settings</Link>
            <div className='header__btns'>
              <button className='btn' onClick={signOut}>Sign out</button>
            </div>
          </div>
          
        </div>
      )}
      <div className={`header__dropdown ${dropdownOpen ? 'open' : ''}`}>
        <button className='dropdown-btn' onClick={toggleDropdown}>
          <img className='dropdown__image' src='/images/tridots.png' alt='tridots'/>
        </button>
      </div>
          <div id='sign__desktop' className='header__btns'>
            <button className='btn' onClick={signOut}>Sign out</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
