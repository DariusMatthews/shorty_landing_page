import React from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
