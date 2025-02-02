import React, { useState } from 'react';
import MicrophoneButton from '../components/MicrophoneButton';
import StopButton from '../components/StopButton';
import { useNavigate } from 'react-router-dom';

const FavoriteBookPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/last-book-read');
  };

  const [favoriteBook, setFavoriteBook] = useState('');
  const [isRecording, setIsRecording] = useState(false);


  const handleInputChange = (event) => {
    setFavoriteBook(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Favorite Book:', favoriteBook);
    // Add logic to handle the favorite book submission
  }; 

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
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
    flexDirection: 'column',
    width: '80%',
    marginBottom: '20px'
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '20px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    flex: 1,
    marginRight: '10px',
    borderRadius: '20px',
    border: '1px solid black',
    outline: 'none'
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
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={favoriteBook}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="My favorite book..."
          />
          {isRecording ? (
            <StopButton onClick={toggleRecording} />
          ) : (
            <MicrophoneButton onClick={toggleRecording} />
          )}
        </div>
        <button onClick={handleStartClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FavoriteBookPage;
