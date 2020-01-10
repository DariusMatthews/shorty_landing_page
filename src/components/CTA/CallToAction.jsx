import React from 'react'
import RoundButton from '../Buttons/RoundButton';

export default function CallToAction() {
  return (
    <div className="cta">
      <h1 className="cta__boost">Boost your links today</h1>
      <RoundButton
        text="Get Started"
        btnStyle="roundBtn__container roundBtn__container--cta"
        btnText="roundBtn__text"
      />
    </div>
  )
}
