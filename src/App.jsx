import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Bio from './pages/Bio';
import React from "react";

function App() {
  return (
    <><div className='bg-cover bg-center bg-[url(https://wallpaperaccess.com/full/3057585.jpg)]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
      </div>
    </>
  );
}

export default App;