import React from 'react'
import Banner from './Banner';
import Contact from './Contact'
import '../App.css';
import './Home.css'
import {  Features4x1, SocialPostCollection  } from '../figma-components';

function Home() {
  return (
    <div className='home__box'>
      <Banner img='images/banner.jpg' title='Discover Your Dream University Program' subTitle='Yeddies is a comprehensive online platform that helps students find the perfect university program that suits their interests, goals, and aspirations.'/>
      <div className='container'>
        <div className='feature__wrapper'>
          <Features4x1 className='feature'/>
        </div>
      <SocialPostCollection isPaginated itemsPerPage={1} className='feature'/>
      <Contact />
      </div> 
    </div>
  )
}

export default Home;
