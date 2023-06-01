import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UniItem, FavoriteUni, Point } from '../models';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Profile.css';
import Account from './Account';
import Badges from './Badges';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} 
    style={{ ...style, display: "flex", cursor: "pointer" }}
    >
      <img src='/images/next.png' alt=''/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} 
    style={{ ...style, display: "flex", cursor: "pointer" }}
    >
      <img src='/images/prev.png' alt=''/>
    </div>
  );
}

// Function to calculate similarity score between two fields using Levenshtein distance
function calculateSimilarity(field1, field2) {
  const intersection = field2.filter(value => value === field1);
  const similarity = intersection.length / field2.length;
  // console.log('intersection: ' + intersection + '\n' + 'similarity' + similarity)
  return similarity;

}

const calculateIntegerSimilarity = (field1, field2, totalUniversities) => {
  
  const maxDifference = totalUniversities - 1; // Maximum difference between ranking values
  
  const diffArray = field2.map(value => Math.abs(field1 - value));

  const minDiff = Math.min(...diffArray);
  
  const similarity = 1 - minDiff / maxDifference;
  return similarity;
};


function Profile({ user}) {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [favoriteUniversities, setFavoriteUniversities] = useState([]);
  const slidesToShow = Math.min(3, favoriteUniversities.length);
  const [recommendedUniversities, setRecommendedUniversities] = useState([]);
  const [showAccount, setShowAccount] = useState(false);

  const regionWeight = 0.7;
  const cityWeight = 0.3;
  const countryWeight = 0.5;
  const typeWeight = 0.4;
  const rankingWeight = 0.4;

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
  useEffect(() => {
    async function fetchRecommendedUniversities() {
      if (favoriteUniversities.length === 0) {
        // If no favorite universities, set recommended universities to an empty array
        setRecommendedUniversities([]);
        return;
      }
      const universities = await DataStore.query(UniItem);
      const totalUniversities = universities.length;
      const recommendedUniversities = universities.map((university) => {
          // Calculate similarity scores for each field
          const regionScore = calculateSimilarity(university.region, favoriteUniversities.map(fav => fav.region));
          const cityScore = calculateSimilarity(university.city, favoriteUniversities.map(fav => fav.city));
          const countryScore = calculateSimilarity(university.country, favoriteUniversities.map(fav => fav.country));
          const typeScore = calculateSimilarity(university.type, favoriteUniversities.map(fav => fav.type));
          
          const rankingScore = calculateIntegerSimilarity(university.ranking, favoriteUniversities.map(fav => fav.ranking), totalUniversities);
          // Calculate overall similarity score by considering individual scores and their weights
          
          const overallScore = (
            regionScore * regionWeight +
            cityScore * cityWeight +
            countryScore * countryWeight + 
            typeScore * typeWeight + 
            rankingScore * rankingWeight
          );

          return {
            university,
            score: overallScore,
          };
        });
    
      recommendedUniversities.sort((a, b) => b.score - a.score);
    
      // Filter and present top-ranked universities as recommendations
      const maxRecommendations = 5; // Set the maximum number of recommended universities to show
      const favoriteUniIds = favoriteUniversities.map(fav => fav.id);
      const filteredRecommendations = recommendedUniversities
      .filter(recommendation => !favoriteUniIds.includes(recommendation.university.id))
      .slice(0, maxRecommendations);

      


    const recommendations = filteredRecommendations.map((recommendation) => recommendation.university);
      
      setRecommendedUniversities(recommendations);
    }
  
    fetchRecommendedUniversities();
    
  }, [favoriteUniversities]);


  const fetchUsername = async () => {
    try {
      const userInfo = await Auth.currentUserInfo();
      setUsername(userInfo.attributes['custom:username'] || '');
    } catch (error) {
      console.log('Error fetching username:', error);
    }
  };

  const handleUsernameChange = async () => {
    const newUsername = prompt('Enter your new username');

    try {
      await Auth.updateUserAttributes(Auth.user, { 'custom:username': newUsername });
      
      setUsername(newUsername);
      // Update the username in the Point model
        const updatedPoint = await DataStore.query(Point, c => c.userSub.eq(user.attributes.sub));
        if (updatedPoint.length > 0) {
          const point = updatedPoint[0];
          point.username = newUsername;
          await DataStore.save(point);
        }
    } catch (error) {
      console.log('Error updating username:', error);
    }
  };

  const handleToggleAccount = () => {
    setShowAccount(!showAccount);
  };

  return (
    <div className="profile">
      <div id='banner__prof' className='banner'>
        <div  className='banner__image'>
            <img src={'images/banner2.jpg'} alt='banner'/>

        </div>


        <div className='container'>
          <div className='banner__details'>
          
            <div className='banner__wrap'>
            <h1>{user.attributes['custom:username'] ? `Hi, ${user.attributes['custom:username']}` : 'Hi,...'} </h1>
            {!user.attributes['custom:username'] && (
            <button id='btn__set' className="btn" onClick={handleUsernameChange}>
              Set Username
            </button>
            
          )}
          
          <button className="btn" onClick={handleToggleAccount}>
              
            {showAccount ? "Hide Account" : "Show Account"}
            {showAccount && <div className='acc__btn'><Account /><button id="btn_hidy" className="btn" onClick={handleToggleAccount}>
              Hide Account
            </button></div>}
            </button>
            
            

            </div>

            <div className='banner__right'>
              <Badges/>
            
            </div>
            </div>
        </div>
    </div>
     <div className="container">

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

        <div className='rec__uni'>
          <h1>Recommended Universities</h1>

            {recommendedUniversities.length > 0 ? (
            <div>
              {recommendedUniversities.map((uni) => (
                <Link to={`/uni/${uni.id}`}>
                  <div key={uni.id} className="rec__uni__item">
                    
                      <img src={uni.photo} alt={uni.name} />
                      <p>{uni.name}</p>
                    
                  </div>
                </Link>
              ))}
            </div>
              ) : (
                <p>No recommended universities found.</p>
              )
              }

        </div>

      </div>
    </div>
  );
}

export default withAuthenticator(Profile);
