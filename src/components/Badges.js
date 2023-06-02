import React from 'react'
import './Badges.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Badge, BadgeUser, Point } from '../models';
function Badges({ user }) {
    const [points, setPoints] = useState(0);
    const [badges, setBadges] = useState([]);
    
    useEffect(() => {
    fetchPoints();
    fetchBadges();
  }, []);
  const fetchBadges = async () => {
    try {
      // Query the BadgeUser models associated with the current user's email
      const userBadgeUsers = await DataStore.query(BadgeUser, (c) =>
        c.userEmail.eq(user.attributes.email)
      );

      if (userBadgeUsers.length > 0) {
        const userBadges = await DataStore.query(Badge, (b) =>
          b.id.eq(userBadgeUsers[0].badgeID)
        );
        setBadges(userBadges);
      }
    } catch (error) {
      console.log('Error fetching badges:', error);
    }
  };
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
  };
  return (
    <div className='badges'>
      <h1>Badges:</h1>
      <div className='badge__collection'>
        {badges.map((badge) => (
          <div key={badge.id} className='badge__item'>

            <div className='badge__container'> 
              <img className='badge__image' src={badge.image} alt={badge.name} />
              <div className='badge__description'>{badge.description}</div>
            </div>

          </div>
        ))}
      </div>
    
    <div className='score__bar'>
        <p className='score__text'><span className='score__span'>Your score:</span> {points}</p>
    </div>
    
    </div>
  )
}

export default withAuthenticator(Badges);
