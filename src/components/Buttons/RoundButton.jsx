import React from 'react'

export default function RoundButton({text}) {
  return (
    <div className="roundBtn__container">
      <button className="roundBtn__text">{text}</button>
    </div>
  )
}
