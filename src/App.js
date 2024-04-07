import React from 'react';
import HomePage from './Pages/HomePage';
import ForecastPage from './Pages/ForecastPage';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './Store/Background.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>

      <Router>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/ForecastPage" element={<ForecastPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
