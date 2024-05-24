// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Contato />
    </div>
  );
};

export default App;
