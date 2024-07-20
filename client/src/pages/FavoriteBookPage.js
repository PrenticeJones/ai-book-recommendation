import React, { useState } from 'react';

const FavoriteBookPage = () => {
  const [favoriteBook, setFavoriteBook] = useState('');

  const handleInputChange = (event) => {
    setFavoriteBook(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Favorite Book:', favoriteBook);
    // Add logic to handle the favorite book submission
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Tell us about your favorite book</h1>
      <input
        type="text"
        value={favoriteBook}
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '16px', width: '80%', marginBottom: '20px' }}
      />
      <br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Submit
      </button>
    </div>
  );
};

export default FavoriteBookPage;
