import React from 'react';
import bookIcon from '../assets/Book.png'; // Import the book icon

const FetchingResultsPage = () => {
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
    
    const headingStyle = {
        textAlign: 'center',
        color: 'black',
        fontSize: '60px',
        fontFamily: 'Arial',
        fontWeight: '600',
        wordWrap: 'break-word',
        marginBottom: '20px'
    };
    
    return (
        <div style={containerStyle}>
        <h1 style={headingStyle}>Looking for your <br /> next book </h1>
        <img src={bookIcon} alt="Book Icon" />
        </div>
    );
    }

    export default FetchingResultsPage;