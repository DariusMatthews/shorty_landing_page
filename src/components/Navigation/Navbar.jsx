import React from 'react';
import logo from '../../images/logo.svg';
import NavLinks from './NavLinks';


export default function NavBar() {
  return (
    <div className="NavBar">
      <img className='NavBar__logo' src={logo} alt="logo"/>
      <NavLinks />
    </div>
  );
}