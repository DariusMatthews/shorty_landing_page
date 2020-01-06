import React from 'react'

export default function RectangleButton({text, onPress}) {
  return (
    <div className="rectBtn__container">
      <button type="submit" className="rectBtn__btn">{text}</button>
    </div>
  )
}
