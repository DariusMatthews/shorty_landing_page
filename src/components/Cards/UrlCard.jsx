import React from 'react';
import RectangleButton from '../Buttons/RectangleButton';

export default function UrlCard({shorten}) {
  return (
    <div className="urlCard">
      <input className="urlCard__input" type="text" placeholder="Shorten a link here..." />
      <RectangleButton onPress={shorten} text="Shorten It!" />
    </div>
  )
}
