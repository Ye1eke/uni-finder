import React, { useEffect, useState } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Point } from '../models';
import Banner from './Banner'
import './Leaderboard.css'
function Leaderboard() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
        try {
          const points = await DataStore.query(Point);
          const sortedPoints = points.sort((a, b) => b.points - a.points); 
          const users = sortedPoints.map(point => ({
            username: point.username,
            score: point.points
          }));
          setUsers(users);
        } catch (error) {
          console.log('Error fetching users:', error);
        }
      };
      
      console.log(users)
  
    return (
      <div className='leaderboard'>
        <Banner img={'/images/yellowblack.jpg'} title={'Leaderboard'}/>
        <div className='leaderboard__box container'>
            <h1>Reach the Top!!!{'🏆'}</h1>
            <div className='table__box'>
            <div class="ribbon"></div>
            <table className="table">
            <thead>
                <tr className='firsty'>
                <th>Ranking</th>
                <th>Username</th>
                <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={index} className={`color${(index % 3) + 1}`}>
                    <td className='ranking'>{index + 1}</td>
                    <td className='name'>{user.username}</td>
                    <td className='points'>{user.score}</td>
                </tr>
                ))}
            </tbody>
            </table>
            </div>
        </div>
      </div>
    );
  }
  
  export default Leaderboard;
  