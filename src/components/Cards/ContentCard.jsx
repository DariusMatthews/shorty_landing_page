import React from 'react'

export default function ContentCard({imgSrc, cardTitle, cardText, contentStyle, imgStyle}) {
  return (
    <div className={`${contentStyle} contentCard`}>
      <div className={`${imgStyle} contentCard__imgContainer`}>
        <img src={imgSrc} alt={cardTitle} />
      </div>
      <h1 className="contentCard__title">{cardTitle}</h1>
      <p className="contentCard__text">{cardText}</p>
    </div>
  )
}
