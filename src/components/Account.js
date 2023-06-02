import React, { useEffect } from 'react'
import { useState } from 'react';
import './Account.css'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, DataStore } from 'aws-amplify';
import { Point } from '../models';

function Account({ user }) {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userInfo = await Auth.currentUserInfo();
        setUsername(userInfo.attributes['custom:username']);
        setFullName(userInfo.attributes['custom:name']);
        setLocation(userInfo.attributes['custom:location']);
        setEmail(userInfo.attributes.email);
          
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);
  const handleUsernameChange = async (e) => {
    setUsername(e.target.value)
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value)
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSave = async () => {
    setIsSaving(true);
  
    try {
      const user = await Auth.currentAuthenticatedUser();
  
      const updateAttributesPromise = Auth.updateUserAttributes(user, {
        'custom:location': location,
        'custom:name': fullName,
        'custom:username': username,
      });
  
      const updatePointPromise = DataStore.query(Point, (c) =>
        c.userSub.eq(user.attributes.sub)
      ).then(async (updatedPoint) => {
        if (updatedPoint.length > 0) {
          const updatedUserPoints = Point.copyOf(updatedPoint[0], (updated) => {
            updated.username = username;
          });
          return DataStore.save(updatedUserPoints);
        }
      });
  
      await Promise.all([updateAttributesPromise, updatePointPromise]);
  
      console.log('User attributes and points updated successfully');
      setShowNotification(true);
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }
  
    setIsSaving(false);
  
    setTimeout(() => {
      setShowNotification(false);
      closeComponent();
    }, 0);
  };

  const closeComponent = () => {
    const accountEditComponent = document.querySelector('.account-edit');
    if (accountEditComponent) {
      accountEditComponent.style.display = 'none';
    }
  };
  return (
    <div className="account-edit">
      
      <div className="account-edit__header">
        <h2>Edit Account</h2>
      </div>
      <div className="account-edit__content">
        <div className="account-edit__form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={user.attributes.email}
            disabled
          />
        </div>
      </div>
      <div className="account-edit__footer">
        <button className="account-edit__save" onClick={handleSave} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save'}
        </button>
        {showNotification && (
        <div id="notification">Successfully saved!</div>
      )}
      </div>
    </div>
  )
}

export default withAuthenticator(Account);
