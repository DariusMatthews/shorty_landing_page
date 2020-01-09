import React, { useState, useEffect } from 'react';
import hamburgerMenu from '../../images/hamburgerMenu.svg';

export default function NavLinks() {

  // setting state
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    // event listener for screen size to toggle nav menu
    window.addEventListener('resize', () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize])

  // toggle links menu function
  const toggleLinks = () => setShowLinks(prevShowLinks => !prevShowLinks);

  //Dropdown menu function to show links on mobile
  const dropDownMenu = () => {
    if (showLinks === true) {
      return (
        <div className="Navlinks__Menu">
          <ul className="Navlinks__list">
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li style={{marginBottom: "1rem"}}><a href="/">Resources</a></li>
          </ul>
          <hr style={styles.bottomBorder} />
          <ul className="Navlinks__list">
            <li style={{marginTop: ".7rem"}}><a href="/">Login</a></li>
            <li><button style={styles.dropBtn}>Sign Up</button></li>
          </ul>
        </div>
      );
    }
  }

  // drop down menu specific styles
  const styles = {
    menuStyles: {
      position: "absolute", 
      left: "1.35rem", 
      top: "14.5vh",
      width: "88%",
      textAlign: "center"
    },
    dropBtn: {
      color: "rgb(247, 244, 244)",
      backgroundColor: "hsl(180, 66%, 49%)",
      width: "90%",
      maxWidth: "375px",
      border: "none",
      borderRadius: "50px",
      paddingTop: ".7rem",
      paddingBottom: ".7rem",
      fontWeight: 700
    },
    bottomBorder: {
      borderBottom: "1px solid hsla(257, 7%, 63%, .05)",
      width: "75%",
      position: "relative",
      left: "12%"
    }
  }

  return (
    <div className="Navlinks">
      {/*
        changing navbar based off screen size
      */}
      {screenSize <= 768
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