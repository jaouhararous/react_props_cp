
import './App.css';
import React from 'react';
import Profile from './profile/Profile';

function App() {
  let Data = {
    fullName: 'Harry Maguire',
    bio: 'De Gea worst nightmare',
    profession: 'lorean'
  };

  return (
    <div className="App">

      <Profile className="prof" details={Data}>
        <img className='img' src="https://i2-prod.dailystar.co.uk/sport/football/article26471650.ece/ALTERNATES/s615/0_GettyImages-1381497649.jpg" alt="profile" />
      </Profile>
    </div>
  );
}

export default App;
