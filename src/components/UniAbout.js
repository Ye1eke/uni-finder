import { withAuthenticator } from '@aws-amplify/ui-react';

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataStore } from 'aws-amplify';
import { UniItem, FavoriteUni } from '../models';
import { Auth } from 'aws-amplify';
import './UniAbout.css'
function UniAbout({ user }) {
    const { id } = useParams();
    const [uni, setUni] = useState(null);
    const [favorites, setFavorites] = useState([]);
    useEffect(()=> {
        async function queryUni(id) {
            const uniFromBackend = await DataStore.query(UniItem, id);
            setUni(uniFromBackend);
        }
 
        if (id) {
            queryUni(id); 
        }
    }, [id]);

    useEffect(() => {
      async function fetchFavorites() {
        const favorites = await DataStore.query(FavoriteUni, c => c.userSub.eq(user.attributes.sub)); // Replace 'USER_SUB' with the actual user's sub
        setFavorites(favorites);
      }
  
      fetchFavorites();
    }, [user.attributes.sub]);
  
    const handleAddToFavorites = async () => {
      try {
        const existingFavorite = favorites.find(favorite => favorite.uniId === id);
        if (existingFavorite) {
          await DataStore.delete(FavoriteUni, existingFavorite.id);
          const updatedFavorites = favorites.filter(favorite => favorite.id !== existingFavorite.id);
          setFavorites(updatedFavorites);
        } else {
      const favorite = await DataStore.save(
        new FavoriteUni({
          uniId: id,
          userSub: user.attributes.sub // Replace 'USER_SUB' with the actual user's sub
        })
      );
      setFavorites([...favorites, favorite]);
    }
 
      } catch (error) {
        console.log('Error adding to favorites:', error);
      }
    };
  
    const isFavorite = favorites.some(favorite => favorite.uniId === id);

    if (!uni) {
        return <div>loading</div>
    }

  return (
    <div className='uni__about'>
      <div className='banner'>
        <div  className='banner__image'>
            <img src={uni.photo} alt='banner'/>

        </div>


        <div className='container'>

            <div className='banner__wrap'>
            <h1>{uni.name}</h1>
            <p></p>

            {!isFavorite ? (
              <button className="banner__button" onClick={handleAddToFavorites}>
                <img id='heart' src='/images/heart.svg' alt='' /> Add to Favorites
              </button>
            ) : (
              <button className="banner__button" onClick={handleAddToFavorites}>
                <img id='heart' src='/images/heart-filled.svg' alt='' /> 
                Added to Favorites
                </button>
            )}
            {/* <Link to=''><a className="banner__button" target="_self" rel="" href="#">
                <img id='heart' src='/images/heart.svg' alt=''/>Add to Favorites</a></Link>     */}
            </div>
        </div>
    </div>
      <div className='container'>
        <div className='uni__text'>
          {uni.description}
        </div>
        {console.log(uni)}

        
      </div>
    </div>
  )
}

export default withAuthenticator(UniAbout);
