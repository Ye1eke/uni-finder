import React, { useEffect } from 'react'
import { useState } from 'react';
import './Account.css'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
function Account({ user }) {
  console.log(user)
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isVisible, setIsVisible] = useState(true);
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleImageRemove = () => {
    setProfileImage('');
  };
  const handleClose = () => {
    // Handle close logic here
    // For example, hide the component or navigate back
    setIsVisible(false);
  };

  const handleSave = async () => {
    // Handle save logic here
    // For example, update the user's account information using Amplify API

    // Assuming you have already set up the necessary Amplify API configurations

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 'custom:location': location });
      console.log('User attribute "location" updated successfully');
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 'custom:name': fullName });
      console.log('User attribute "fullname" updated successfully');
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 'custom:username': username });
      console.log('User attribute "usernam" updated successfully');
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { 'custom:image': profileImage });
      console.log('User attribute "image" updated successfully');
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }



    // Call Amplify API to update user information
    // For example, using Auth.updateUserAttributes method

    
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className="account-edit">
      <div className="account-edit__header">
        <h2>Edit Account</h2>
        {/* <button className="account-edit__close" onClick={handleClose}>
          X
        </button> */}
      </div>
      <div className="account-edit__content">
        <div className="account-edit__profile">
          <label htmlFor="profile-image" className="account-edit__profile-image">
          {profileImage ? (
            <div className="account-edit__profile-image-container">
            <img src={profileImage} alt="Profile" />
            <button className="account-edit__profile-image-remove" onClick={handleImageRemove}>
            x
          </button>
          </div>
          ) : (
            <div className="account-edit__profile-image-frame">
              <span>No photo</span>
            </div>
          )}
            <input
              id="profile-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>
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
        <button className="account-edit__save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default withAuthenticator(Account);
