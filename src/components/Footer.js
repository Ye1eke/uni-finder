import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='container footer__inside'>
        <div className='footer__content'>
          <p className='footer__logo'>
           <Link to='/'>Yeddies</Link>
          </p>

          <nav className='footer__nav'>
            <ul>
              <li><Link to='/article'>Articles</Link></li>
              <li><Link to='/uni'>Universities</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to="/profile/leaderboard">Leaderboard</Link></li>
            </ul>
          </nav>
        </div>

        <div className='footer__rights'>
          <span>© 2023 Yeddies</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
