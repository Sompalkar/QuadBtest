import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './Components/ShowDetails'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  return (
    <div className='App'>
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
