import React from 'react';
import HomePage from './Pages/HomePage';
import ForecastPage from './Pages/ForecastPage';
import Navbar from './Pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/ForecastPage" element={<ForecastPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;