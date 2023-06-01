import React from 'react'
import './Badges.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Point } from '../models';
function Badges({ user }) {
    const [points, setPoints] = useState(0);

    
  useEffect(() => {
    fetchPoints();
  }, []);
  
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
        <badge className='badge__item'>

        </badge>
      </div>
    
    <div className='score__bar'>
        <p>Your score: {points}</p>
    </div>
    
    </div>
  )
}

export default withAuthenticator(Badges);
