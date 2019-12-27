import React from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
