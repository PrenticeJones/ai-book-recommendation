import React, { useState } from 'react';
import MicrophoneButton from '../components/MicrophoneButton';
import StopButton from '../components/StopButton';

const FavoriteBookPage = () => {
  const [favoriteBook, setFavoriteBook] = useState('');

  const handleInputChange = (event) => {
    setFavoriteBook(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Favorite Book:', favoriteBook);
    // Add logic to handle the favorite book submission
  };

  const containerStyle = {
    width: '100vw',
    height: '80vh',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '50px',
    border: '1px black solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontSize: '24px',
    flex: 1,
    marginRight: '10px'
  };
  const headingStyle = {
    fontSize: '60px', 
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Tell me about your<br />favorite book</h1>
      <div style={formStyle}>
        <input
          type="text"
          value={favoriteBook}
          onChange={handleInputChange}
          style={inputStyle}
          placeholder="My favorite book..."
        />
        <MicrophoneButton />
        <StopButton />
      </div>
      <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Submit
      </button>
    </div>
  );
};

export default FavoriteBookPage;
