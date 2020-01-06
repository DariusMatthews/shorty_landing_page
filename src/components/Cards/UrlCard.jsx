import React from 'react';
import RectangleButton from '../Buttons/RectangleButton';

export default function UrlCard({onChange, onSubmit, value, errorMessage, errorClass}) {
  return (
    <div className="urlCard">
      <form
      className="urlCard__form" onSubmit={onSubmit}>
        <input
          name="originalUrl"
          onChange={onChange}
          className={`urlCard__input ${errorClass}`}
          type="text"
          placeholder="Shorten a link here..."
          value={value}
        />
        <p className="urlCard__errorMSG">{errorMessage}</p>
        <RectangleButton
          text="Shorten It!"
        />
      </form>
    </div>
  )
}
