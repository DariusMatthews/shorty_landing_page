import React from 'react'

export default function ContentCard({imgSrc, cardTitle, cardText}) {
  return (
    <div className="contentCard">
      <div className="contentCard__imgContainer">
        <img src={imgSrc} alt={cardTitle} />
      </div>
      <h1 className="contentCard__title">{cardTitle}</h1>
      <p className="contentCard__text">{cardText}</p>
    </div>
  )
}
