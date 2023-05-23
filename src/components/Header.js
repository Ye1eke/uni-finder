import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import {useAuthenticator } from '@aws-amplify/ui-react';

function Header() {
    const { signOut } = useAuthenticator((context)=> [context.signOut]);
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
                <Link to='/profile'>Profile</Link>
                {/* <span class="material-symbols-outlined">
                search
                </span> */}
            </div>

            {/* <div className='header__btns'>
                <button className='btn log-in'>Sign in</button>
                <button className='btn sign-up'>Create an account</button>
            </div> */}
        
            <div className='header__btns'>
                <button className='btn' onClick={signOut}>Sign out</button>
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Header
