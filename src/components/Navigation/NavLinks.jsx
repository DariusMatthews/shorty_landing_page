import React, { useState } from 'react';
import hamburgerMenu from '../../images/hamburgerMenu.svg';

export default function NavLinks() {

  // setting state
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [showLinks, setShowLinks] = useState(false);

  // event listener for screen size to toggle nav menu
  window.addEventListener('resize', () => {
    setScreenSize(window.screen.width);
  });

  // toggle links menu function
  const toggleLinks = () => setShowLinks(prevShowLnks => !prevShowLnks);

  //Dropdown menu function to show links on mobile
  const dropDownMenu = () => {
    if (showLinks === true) {
      return (
        <div className="Navlinks__Menu">
          <ul className="Navlinks__list">
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Resources</a></li>
          </ul>
          <ul className="Navlinks__list">
            <li><a href="/">Login</a></li>
            <li><button>Sign Up</button></li>
          </ul>
        </div>
      );
    }
  }

  // drop down menu styles
  const styles = {
    menuStyles: {
      position: "absolute", 
      left: "1rem", 
      top: "15vh",
      width: "88%",
      textAlign: "center"
    }
  }

  return (
    <div className="Navlinks">
      {/*
        changing navbar based off screen size
      */}
      {screenSize < 768
        ? (
          <div>
            <button onClick={toggleLinks} className="Navlinks__MenuButton">
              <img className="Navlinks__Hamburger" src={hamburgerMenu} alt="hamburgerMenu" />
            </button>
            <div style={styles.menuStyles}>
              {dropDownMenu()}
            </div>
          </div>
        )
        : (
          <div style={{ display: "flex" }}>
            <ul className="Navlinks__list" style={{ display: "flex" }}>
              <li><a href="/">Features</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Resources</a></li>
            </ul>
            <ul className="Navlinks__list" style={{ display: "flex" }}>
              <li><a href="/">Login</a></li>
              <li><button>Sign Up</button></li>
            </ul>
          </div>
        )
      }
    </div>
  )
}