import React from 'react';
import RectangleButton from '../Buttons/RectangleButton';

export default function UrlCard({onChange, onSubmit, value, errorMessage}) {
  return (
    <div className="urlCard">
      <form
      className="urlCard__form" onSubmit={onSubmit}>
        <input
          name="originalUrl"
          onChange={onChange}
          className={(errorMessage.length > 0 ) ? ' urlCard__input urlCard__inputError' : "urlCard__input"}
          type="text"
          placeholder="Shorten a link here..."
          value={value}
        />
        <label className="urlCard__errorMSG">     
          {errorMessage}
        </label>
        <RectangleButton
          text="Shorten It!"
        />
      </form>
    </div>
  )
}
