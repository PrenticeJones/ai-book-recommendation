import React from 'react';
import micIcon from '../assets/microphone.png'; // Import the microphone icon

const MicrophoneButton = ({onClick}) => {
  const buttonStyle = {
    width: '67px',
    height: '67px',
    background: 'rgba(0, 175, 84, 0.80)',
    borderRadius: '50%',
    border: '1px black solid',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '10px'
  };

  const iconStyle = {
    width: '39.08px',
    height: '27.50px',
    position: 'absolute',
    background: `url(${micIcon}) no-repeat center center`,
    backgroundSize: 'contain'
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <div style={iconStyle}></div>
    </div>
  );
};

export default MicrophoneButton;
