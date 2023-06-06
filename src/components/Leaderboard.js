import React, { useEffect, useState } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Point } from '../models';
import Banner from './Banner';
import './Leaderboard.css';

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const points = await DataStore.query(Point);
      const sortedPoints = points.sort((a, b) => b.points - a.points);
      const users = sortedPoints.map((point) => ({
        username: point.username,
        score: point.points,
      }));
      setUsers(users);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const renderUsers = () => {
    return currentUsers.map((user, index) => (
      <tr key={index} className={`color${(index % 3) + 1}`}>
        <td className='ranking'>{indexOfFirstUser + index + 1}</td>
        <td className='name'>{user.username}</td>
        <td className='points'>{user.score}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = Math.ceil(users.length / usersPerPage);
    const isPreviousDisabled = currentPage === 1;
    const isNextDisabled = currentPage === pageNumbers;

    return (
      <tfoot className='table__foot_pg'>
        
          <div className='pagination'>
            <button
              onClick={handlePreviousPage}
              disabled={isPreviousDisabled}
              className={`pagination-button ${isPreviousDisabled ? 'disabled' : ''}`}
              style={{ backgroundColor: '#ffe066' }}
            >
              {'<'}
            </button>
            
            <button
              onClick={handleNextPage}
              disabled={isNextDisabled}
              className={`pagination-button ${isNextDisabled ? 'disabled' : ''}`}
              style={{ backgroundColor: '#ffe066' }}
            >
              {'>'}
            </button>
            </div>
        
      </tfoot>
    );
  };

  return (
    <div className='leaderboard'>
      <div id='banner__prof' className='banner'>
        <div className='banner__image'>
          <img src={'/images/yellowblack.jpg'} alt='banner' />
        </div>
        <div className='leaderboard__box container'>
          <h1>Reach the Top!!!{'🏆'}</h1>
          <div className='table__box'>
            <table className='table'>
              <thead>
                <tr className='firsty'>
                  <th>Ranking</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>{renderUsers()}</tbody>
              {renderPagination()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
