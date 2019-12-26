import React from 'react';
import headerPic from '../../images/illustration-working.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="header__imgContainer">
        <img className="header__img" src={headerPic} alt="illustration" />
      </div>
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
    </div>
  )
}
