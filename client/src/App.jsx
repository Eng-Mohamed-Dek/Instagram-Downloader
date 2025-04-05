import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='mb-20'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} exact/>
          <Route path="/home"  element={<Home/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
