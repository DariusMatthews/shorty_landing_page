import React from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
