import React from 'react'
import './Banner.css'
import { Link } from "react-router-dom";

function Banner({img, title, subTitle}) {
  return (
    <div className='banner'>
        <div  className='banner__image'>
            <img src={img} alt='banner'/>

        </div>


        <div className='container'>

            <div className='banner__wrap'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Link to='/uni'><a className="banner__button" target="_self" rel="" href="#">
                Explore</a></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Banner
