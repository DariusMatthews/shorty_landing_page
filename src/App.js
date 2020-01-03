import React from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cta from './components/CTA/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
