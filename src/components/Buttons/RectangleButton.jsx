import React from 'react'

export default function RectangleButton({text, btnStyle}) {
  return (
    <div className={btnStyle + " rectBtn__container"}>
      <button type="submit" className="rectBtn__btn">{text}</button>
    </div>
  )
}
