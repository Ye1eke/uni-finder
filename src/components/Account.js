import React, { useEffect } from 'react'
import { useState } from 'react';
import './Account.css'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, DataStore } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { Point } from '../models';
function Account({ user }) {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

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
    setProfileImage(file);

    // Create a URL for previewing the image
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleImageRemove = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const imageUrl = user.attributes['custom:image'];
      
      if (imageUrl) {
        const key = imageUrl.split('/').pop(); // Extract the S3 key from the image URL
        await Storage.remove(key); // Remove the image from S3
        await Auth.updateUserAttributes(user, { 'custom:image': '' }); // Clear the image attribute in the user's profile
        console.log('Image removed successfully');
      }
      
      setProfileImage('');
      setPreviewImage('');
    } catch (error) {
      console.log('Error removing image:', error);
    }
    setProfileImage('');
  setPreviewImage('');
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
      // Update the username in the Point model
      console.log(user)
        const updatedPoint = await DataStore.query(Point, c => c.userSub.eq(user.attributes.sub));
        const userAttributes = await Auth.currentAuthenticatedUser();
          const { attributes } = userAttributes;
        if (updatedPoint.length > 0) {
          const updatedUserPoints = Point.copyOf(updatedPoint[0], updated => {
              
              updated.username = attributes['custom:username'];
              
            });
            await DataStore.save(updatedUserPoints);
            console.log('Points username added');
        }
          console.log('User attribute "username" updated successfully');
        } catch (error) {
          console.log('Error updating user attribute:', error);
        }

    try {
      const user = await Auth.currentAuthenticatedUser();
      const key = generateKey(profileImage.name);
      
      await Storage.put(key, profileImage);
      const imageUrl = await Storage.get(key.toString());
      console.log(imageUrl) // Retrieve the URL of the uploaded image from S3
      await Auth.updateUserAttributes(user, { 'custom:image': imageUrl });
      console.log('User attribute "custom:image" updated successfully');
    } catch (error) {
      console.log('Error updating user attribute:', error);
    }
    
  };

  const generateKey = (fileName) => {
    const extension = fileName.split('.').pop(); // Extract the file extension
    const randomString = uuidv4().split('-').pop(); // Generate a random string using uuidv4 and extract the last part
    const truncatedFileName = fileName.substring(0, 10); // Truncate the original file name to 10 characters
    return `${truncatedFileName}-${randomString}.${extension}`; // Combine the truncated file name, random string, and extension
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
        <button className="account-edit__save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default withAuthenticator(Account);
