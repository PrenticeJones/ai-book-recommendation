import React from 'react';

const StopButton = () => {
  const buttonStyle = {
    width: '67px',
    height: '67px',
    background: 'white',
    borderRadius: '50%',
    border: '2px rgba(175, 0, 0, 0.80) solid',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '10px'
  };

  const squareStyle = {
    width: '39px',
    height: '39px',
    background: 'rgba(175, 0, 0, 0.80)',
  };

  return (
    <div style={buttonStyle}>
      <div style={squareStyle}></div>
    </div>
  );
};

export default StopButton;
