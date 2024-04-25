import React from 'react';
import './backgroundwithtext.css'; // 

function BackgroundWithText({ imageUrl, text }) {
  return (
    <div className="background-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay-text">{text}</div>
    </div>
  );
}

export default BackgroundWithText;