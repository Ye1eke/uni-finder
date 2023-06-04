import { withAuthenticator } from '@aws-amplify/ui-react';
import ReactStars from 'react-rating-stars-component';

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataStore } from 'aws-amplify';
import { UniItem, FavoriteUni, Point, BadgeUser, BadgeUserBadge, Badge } from '../models';
import { Auth } from 'aws-amplify';
import './UniAbout.css'
import Quiz from './Quiz'; 
import QuestionComponent from './QuestionComponent';
function UniAbout({ user }) {
    const { id } = useParams();
    const [uni, setUni] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [points, setPoints] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationValue, setAnimationValue] = useState(0);
    const [rating, setRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    useEffect(()=> {
        async function queryUni(id) {
            const uniFromBackend = await DataStore.query(UniItem, id);
            setUni(uniFromBackend);
            setAverageRating(uniFromBackend.rate);
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
    useEffect(() => {
        const fetchPoints = async () => {
          try {
            // Query the Point models associated with the current user's sub
            const userPoints = await DataStore.query(Point, (c) =>
              c.userSub.eq(user.attributes.sub)
            );
        
            if (userPoints.length > 0) {
              setPoints(userPoints[0].points); // Assuming only one Point model per user
            }
          } catch (error) {
            console.log('Error fetching points:', error);
          }
        } 
        fetchPoints();
    }, [user.attributes.sub]);
    const handleAddToFavorites = async () => {
      try {
         const existingFavorite = favorites.find(favorite => favorite.uniId === id);
         
        if (existingFavorite) {
          await DataStore.delete(FavoriteUni, existingFavorite.id);
          const updatedFavorites = favorites.filter(favorite => favorite.id !== existingFavorite.id);
          setFavorites(updatedFavorites);
          // Deduct 50 points
          const updatedPoints = points - 50;
          setPoints(updatedPoints);
          setAnimationValue(-50);
          const userAttributes = await Auth.currentAuthenticatedUser();
          const { attributes } = userAttributes;
          // Update the Point model with the deducted points
          const userPoints = await DataStore.query(Point, c => c.userSub.eq(user.attributes.sub));
          if (userPoints.length > 0) {
            const updatedUserPoints = Point.copyOf(userPoints[0], updated => {
              updated.points = updatedPoints;
              updated.username = attributes['custom:username'];
              
            });
            await DataStore.save(updatedUserPoints);
            console.log('Points deducted successfully.');
          }
        } else {
      const favorite = await DataStore.save(
        new FavoriteUni({
          uniId: id,
          userSub: user.attributes.sub // Replace 'USER_SUB' with the actual user's sub
        })
      );
      setFavorites([...favorites, favorite]);
      // Increment user's points
      const newPoints = points + 50; // Adjust the points increment as per your requirement

      // Query the Point model associated with the current user's sub
      const userPoints = await DataStore.query(Point, (c) =>
        c.userSub.eq(user.attributes.sub)
      );

      if (userPoints.length > 0) {
        const updatedPoints = Point.copyOf(userPoints[0], (updated) => {
          updated.points = newPoints;
        });

        await DataStore.save(updatedPoints);
        setPoints(newPoints);
        
        console.log('Points updated successfully.');
      } else {
        // Create a new Point model if it doesn't exist for the user
        const newPoint = new Point({
          userSub: user.attributes.sub,
          points: newPoints,
        });

        await DataStore.save(newPoint);
        setPoints(newPoints);
        console.log('Points created and updated successfully.');
        
        
      
    }
    setAnimationValue(50);
    // Check if the user has already been awarded the "FirstUni" badge
    const userBadges = await DataStore.query(BadgeUser, c => c.userEmail.eq(user.attributes.email));
    if (!userBadges || !userBadges.some(badgeUser => badgeUser.badges.some(b => b.name === 'FirstUni'))) {
      // Award the "FirstUni" badge to the user
      const badge = await DataStore.query(Badge, c => c.name.eq('FirstUni'));
      if (badge) {
        const userBadge = userBadges ? userBadges[0] : null;
        const updatedUserBadges = userBadge
          ? BadgeUser.copyOf(userBadge, updated => {
              updated.badges.push(badge[0]);
            })
          : new BadgeUser({
              userEmail: user.attributes.email,
              badgeID: badge[0].id,
            });

        await DataStore.save(updatedUserBadges);
        console.log('Badge awarded successfully.');
      }
    }
  }

  setIsAnimating(true);
      } catch (error) {
        console.log('Error adding to favorites:', error);
      }
    };
    const handleAnimationComplete = () => {
      setIsAnimating(false);
    };

    const handleRatingChange = async (newRating) => {
      try {
        const newAverageRating = (uni.rate + newRating) / 2;
    
        const updatedUni = UniItem.copyOf(uni, (updated) => {
          updated.rate = newAverageRating;
        });
    
        await DataStore.save(updatedUni);
    
        setRating(newRating);
        setAverageRating(newAverageRating);
        window.location.reload()
      } catch (error) {
        console.log('Error updating rating:', error);
      }
    };
    
    const isFavorite = favorites.some(favorite => favorite.uniId === id);
    const isBolashakPartner = uni?.isBolashakPartner || false;
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
          <div className='banner__details'>
            <div className='banner__wrap__uni'>
            {isBolashakPartner && <span id='bolashak__text'>{'🌟'}This university is partnered with Bolashak</span>}
            <h1>{uni.name}</h1>
            <p>{uni.region + ' - ' + uni.country + ' - ' + uni.city}</p>
            <p>{'#'+uni.ranking}</p>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={uni.rate}
              onChange={handleRatingChange}
            />
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

            


            {/* <div className='animation-container'>
              {isAnimating && (
                <div className='animation' onAnimationEnd={handleAnimationComplete}>
                  {animationValue > 0 ? `+${animationValue}` : animationValue}
                </div>
              )}
            </div> */}
            {/* <Link to=''><a className="banner__button" target="_self" rel="" href="#">
                <img id='heart' src='/images/heart.svg' alt=''/>Add to Favorites</a></Link>     */}
            </div>

            <div className='banner__right'>
                <div className='banner__right__box'>
                  <h1>Requirements:</h1>
                  <ul className='banner__right__list'>
                  {uni.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                  </ul>
                </div>
            </div>

          </div>


        </div>

    </div>
      <div className='container'>
        <div className='uni__info'>
        <div className='uni__text'>
          <h3>Overview</h3>
          <p>{uni.description}</p>

          <h3>Scholarships</h3>
          <ul className='banner__right__list'>
            {uni.scholarships.map((scholarship, index) => (
              <li key={index}>{scholarship}</li>
            ))}
          </ul>

          <div className='dep__prog'>
            <div>
              <h3>Departments</h3>
              <ul className='banner__right__list'>
                {uni.departments.map((department, index) => (
                  <li key={index}>{department}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3>Accreditation</h3>
          <p>{uni.accreditation}</p>
          
          

        </div>
        <div>
        <div className='uni__side'>
          <p>Tuition fee: {uni.price + "$"}</p>
          <p>Type: {uni.type}</p>
          <p>Total Students: {uni.enrollment}</p>
          <p>Total Staff: {uni.stuff}</p>
          <p>Acceptance Rate: {uni.acceptance_rate * 100}%</p>
        </div>

        <div className='uni__side__second'>
          <h3>Contacts</h3>
          <a href={'mailto:'+uni.email}><p>Email: {uni.email}</p></a>
          <a href={'tel:'+uni.phone}><p>Phone: {uni.phone}</p></a>
          <p>Address: {uni.address}</p>
          <Link to={`${uni.website}`}><p>Website: {uni.website.replace(/(^\w+:|^)\/\//, '').replace('www.', '').replace('/', '')}</p></Link>
          
        </div>
        </div>
        </div>
        <div className='uni__quiz'>
            <Quiz/>
          </div>
      </div>
    </div>
  )
}

export default withAuthenticator(UniAbout);
