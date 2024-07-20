import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FavoriteBookPage from './pages/FavoriteBookPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite-book" element={<FavoriteBookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
