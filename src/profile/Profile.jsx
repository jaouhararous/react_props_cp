// Profile.js

import React from 'react';

const Profile = (props) => {
  const { fullName, bio, profession } = props.details;

  const handleName = () => {
    alert(`${fullName}: ${bio}, ${profession}`);
  };

  return (
    <div>
      {props.children}
      <button className='btn' onClick={handleName}>Show Details</button>
    </div>
  );
};

export default Profile;






