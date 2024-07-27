import React, { useState } from 'react';
import MicrophoneButton from '../components/MicrophoneButton';
import StopButton from '../components/StopButton';
import { useNavigate } from 'react-router-dom';

const LastBookPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/next-book');
  };
  const [lastBook, setLastBook] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleInputChange = (event) => {
    setLastBook(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Last Book Read:', lastBook);
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
      <h1 style={headingStyle}>What was the last book<br />you read</h1>
      <div style={formStyle}>
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={lastBook}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="The last book I read..."
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

export default LastBookPage;
