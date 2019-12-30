import React from 'react'

export default function RectangleButton({text, onPress}) {
  return (
    <div className="rectBtn__container">
      <button onClick={onPress} className="rectBtn__btn">{text}</button>
    </div>
  )
}
