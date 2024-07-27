import React, { useState } from 'react';
import MicrophoneButton from '../components/MicrophoneButton';
import StopButton from '../components/StopButton';
import {useNavigate} from 'react-router-dom';

const NextBookPage = () => {

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/fetching-results');
  };
  
  const [isRecording, setIsRecording] = useState(false);

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
    boxSizing: 'border-box',
    position: 'relative'
  };

  const headingStyle = {
    textAlign: 'center',
    color: 'black',
    fontSize: '60px',
    fontFamily: 'Arial',
    fontWeight: '600',
    wordWrap: 'break-word',
    marginBottom: '20px'
  };

  const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    width: '306px',
    height: '97px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '40px',
    fontFamily: 'Arial',
    fontWeight: '500',
    color: 'black',
    wordWrap: 'break-word'
  };

  const micButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    position: 'absolute',
    right: '200px', // Adjust this to move it left
    top: '50%', // Center vertically
    transform: 'translateY(-50%)'
  };


  return (
    <div style={containerStyle}>
      <div style={headingStyle}>
        Tell me what<br />you are looking for
      </div>
      <div style={buttonContainerStyle}>
        <div style={{ ...buttonStyle, background: '#FBAF00' }}>Business</div>
        <div style={{ ...buttonStyle, background: '#FFA3AF' }}>Self-Help</div>
        <div style={{ ...buttonStyle, background: '#007CBE' }}>Biography</div>
        <div style={{ ...buttonStyle, background: '#00AF54' }}>Novel</div>
      </div>
      <div style={micButtonStyle}>
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
  );
};

export default NextBookPage;
