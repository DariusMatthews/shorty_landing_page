import React from 'react';
import RectangleButton from '../Buttons/RectangleButton';

export default function UrlCard() {
  return (
    <div className="urlCard">
      <input className="urlCard__input" type="text" placeholder="Shorten a link here..." />
      <RectangleButton text="Shorten It!" />
    </div>
  )
}
