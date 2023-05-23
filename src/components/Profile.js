import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { Badge, BadgeUser } from '../models';
import { Link, useParams } from 'react-router-dom';
import { UniItem, FavoriteUni } from '../models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Profile.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} 
    style={{ ...style, display: "block", cursor: "pointer" }}
    >
      <img src='/images/next.png' alt=''/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} 
    style={{ ...style, display: "block", cursor: "pointer" }}
    >
      <img src='/images/prev.png' alt=''/>
    </div>
  );
}
function Profile({ user}) {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [badges, setBadges] = useState([]);
  const [awardedBadges, setAwardedBadges] = useState([]);
  const [isBadgeAwarded, setIsBadgeAwarded] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoriteUniversities, setFavoriteUniversities] = useState([]);
  const slidesToShow = Math.min(3, favoriteUniversities.length);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  useEffect(() => {
    fetchUsername();
    fetchBadgeUsers();
    queryBadges();
    fetchFavorites();
  }, []);

  useEffect(() => {
    async function fetchFavoriteUniversities() {
      const favoriteUniIds = favorites.map(favorite => favorite.uniId);
      const favoriteUnis = await Promise.all(
        favoriteUniIds.map(async uniId => {
          const uni = await DataStore.query(UniItem, uniId);
          return uni;
        })
      );
      setFavoriteUniversities(favoriteUnis);
    }

    fetchFavoriteUniversities();
  }, [favorites]);
  const fetchFavorites = async () => {
    const favorites = await DataStore.query(FavoriteUni, c => c.userSub.eq(user.attributes.sub)); // Replace 'USER_SUB' with the actual user's sub
    setFavorites(favorites);
  }
  const fetchUsername = async () => {
    try {
      const userInfo = await Auth.currentUserInfo();
      setUsername(userInfo.username);
    } catch (error) {
      console.log('Error fetching username:', error);
    }
  };
  const fetchBadgeUsers = async () => {
    const userBadgeUsers = await DataStore.query(BadgeUser, (b) =>
      b.userEmail.eq(user.attributes.email)
    );
    const userBadgeIDs = userBadgeUsers.map((badgeUser) => badgeUser.badgeID);
    setAwardedBadges(userBadgeIDs);
  };

  const handleUsernameChange = async () => {
    const newUsername = prompt('Enter your new username');

    try {
      await Auth.updateUserAttributes(Auth.user, { 'custom:username': newUsername });
      window.location.reload();
      setUsername(newUsername);
    } catch (error) {
      console.log('Error updating username:', error);
    }
  };

  const queryBadges = async () => {
    const badgesFromBackend = await DataStore.query(Badge);
    setBadges(badgesFromBackend);
    checkAndAwardBadge(badgesFromBackend);
  };

  const checkAndAwardBadge = async (badges) => {
    const existingBadgeUser = await DataStore.query(BadgeUser, (b) =>
      b.userEmail.eq(user.attributes.email)
    );
    
    if (existingBadgeUser.length === 0 && badges.length > 0) {
      const badgeToAward = badges[0]; // Assuming you want to award the first badge in the list

      if (!awardedBadges.includes(badgeToAward.id)) {
        await DataStore.save(
          new BadgeUser({
            badgeID: badgeToAward.id,
            userEmail: user.attributes.email,
          })
        );
        setIsBadgeAwarded(true);
        setAwardedBadges([...awardedBadges, badgeToAward.id]);
      }
    }
  };

  useEffect(() => {
    if (isBadgeAwarded) {
      alert('Congratulations! You have been awarded a badge.');
    }
  }, [isBadgeAwarded]);

  const earnedBadges = badges.filter((badge) => awardedBadges.includes(badge.id));
  
  return (
    <div className="profile">
      <Banner img="images/banner2.jpg" title={`Hi, ${user.attributes['custom:username']}`} subTitle="" />
      <div className="container">
        <button className="btn" onClick={handleUsernameChange} style={{ margin: "50px 0px" }}>
          Change Username
        </button>
        <h1>Your Badges:</h1>
        {earnedBadges.length > 0 ? (
        earnedBadges.map((badge) => (
          <div className="badge" key={badge.id} title={badge.description}>
            
            {badge.image && <img src={badge.image} alt="Badge" />}
          </div>
        ))
      ) : (
        <p>No earned badges found.</p>
      )}

      <div className='favorites__container'>
        <h1>Your Favorite Universities</h1>
        {favoriteUniversities.length > 0 ? (
          <Slider {...sliderSettings} className='favorites__slider'>
          {favoriteUniversities.map(favoriteUni  => (
            
            <div key={favoriteUni.id} className='slider-item'>
              <Link to={'/uni/'+favoriteUni.id}>
              <img src={favoriteUni.photo} alt={favoriteUni.name} />
              <p>{favoriteUni.name}</p>
              </Link>
            </div>
            
          ))}
        </Slider>
        ) : (
          <p>No favorite universities added yet.</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Profile);
