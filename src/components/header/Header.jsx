import React from 'react';
import headerPic from '../../images/illustration-working.svg';
import RoundButton from '../Buttons/RoundButton';

export default function Header() {
  return (
    <div className="header">
      <div className="header__imgContainer">
        <img className="header__img" src={headerPic} alt="illustration" />
      </div>
      <h1 className="header__title">More than just shorter links</h1>
      <p className="header__content">Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <RoundButton text="Get Started" />
    </div>
  )
}
