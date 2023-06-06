import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Badges.css';
import { DataStore } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Badge, BadgeUser, Point } from '../models';
import Slider from 'react-slick';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function Badges({ user }) {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    fetchPoints();
    fetchBadges();
  }, []);

  const fetchBadges = async () => {
    try {
      const userBadgeUsers = await DataStore.query(BadgeUser, (c) =>
        c.userEmail.eq(user.attributes.email)
      );

      if (userBadgeUsers.length > 0) {
        const badgeIDs = userBadgeUsers.map((badgeUser) => badgeUser.badgeID);
        const userBadges = await Promise.all(
          badgeIDs.map((badgeID) => DataStore.query(Badge, badgeID))
        );
        setBadges(userBadges);
      }
    } catch (error) {
      console.log('Error fetching badges:', error);
    }
  };

  const fetchPoints = async () => {
    try {
      const userPoints = await DataStore.query(Point, (c) =>
        c.userSub.eq(user.attributes.sub)
      );

      if (userPoints.length > 0) {
        const userPoint = userPoints[0];
        setPoints(userPoint.points);
      }

      checkAwardPoints500Badge();
      checkAwardPoints1000Badge();

    } catch (error) {
      console.log('Error fetching points:', error);
    }
  };

  const checkAwardPoints500Badge = async () => {
    if (points >= 500) {
      try {
        const points500Badge = await DataStore.query(Badge, (c) =>
          c.name.eq('Points500')
        );

        if (points500Badge.length > 0) {
          const badgeID = points500Badge[0].id;
          await awardBadge(badgeID);
        }
      } catch (error) {
        console.log('Error checking Points500 badge:', error);
      }
    }
  };

  const checkAwardPoints1000Badge = async () => {
    if (points >= 1000) {
      try {
        const points1000Badge = await DataStore.query(Badge, (c) =>
          c.name.eq('Points1000')
        );

        if (points1000Badge.length > 0) {
          const badgeID = points1000Badge[0].id;
          await awardBadge(badgeID);
        }
      } catch (error) {
        console.log('Error checking Points1000 badge:', error);
      }
    }
  };

  const awardBadge = async (badgeID) => {
    try {
      const existingBadgeUser = await DataStore.query(BadgeUser, (c) => c.and(c => [
        c.userEmail.eq(user.attributes.email),
        c.badgeID.eq(badgeID)
      ]));

      if (!existingBadgeUser.length) {
        // Award the badge to the user
        await DataStore.save(
          new BadgeUser({
            badgeID: badgeID,
            userEmail: user.attributes.email,
          })
        );
      }
    } catch (error) {
      console.log('Error awarding badge:', error);
    }
  };

  return (
    <div className='badges container'>
      <h1>Badges:</h1>
      {/* <div className='badge__collection'> */}
      <Slider {...sliderSettings} className='badge__slider'>
        {badges.map((badge, index) => (
          <div key={`${badge.id}_${index}`} className='badge__item'>
            <div className='badge__container'>
              <img className='badge__image' src={badge.image} alt={badge.name} />
              <div className='badge__description'>{badge.description}</div>
            </div>
          </div>
        ))}
        </Slider>
      {/* </div> */}
      <div className='score__bar'>
        <p className='score__text'>
          <span className='score__span'>Your score:</span> {points}
        </p>
      </div>
    </div>
  );
}

export default withAuthenticator(Badges);
