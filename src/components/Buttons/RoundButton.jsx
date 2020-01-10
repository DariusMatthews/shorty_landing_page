import React from 'react'

export default function RoundButton({text, btnStyle, btnText}) {
  return (
    <div className={btnStyle}>
      <button className={btnText}>{text}</button>
    </div>
  )
}
