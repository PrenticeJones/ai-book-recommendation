import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FavoriteBookPage from './pages/FavoriteBookPage';
import LastBookPage from './pages/LastBookPage';
import NextBookPage from './pages/NextBookPage';
import FetchingResultsPage from './pages/FetchingResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite-book" element={<FavoriteBookPage />} />
        <Route path="/last-book-read" element={<LastBookPage />} />
        <Route path="/next-book" element={<NextBookPage />} />
        <Route path="/fetching-results" element={<FetchingResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
