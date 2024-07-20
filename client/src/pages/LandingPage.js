import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/favorite-book');
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 48,
    fontFamily: 'Arial',
    fontWeight: 400,
    wordWrap: 'break-word',
    padding: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    width: '269px',
    height: '83px',
    background: '#FFD639',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    cursor: 'pointer',
    fontSize: '36px',
  };

  return (
    <div style={containerStyle}>
      <div>
        Hi, let’s find your <br />next book <br />you want to <br />read
      </div>
      <div style={buttonStyle} onClick={handleStartClick}>
        Let’s start...
      </div>
    </div>
  );
};

export default LandingPage;
