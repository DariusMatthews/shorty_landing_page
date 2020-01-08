import React, {useState} from 'react'

export default function ShortenedCard({fullUrl, shortUrl}) {
  const [click, setClick] = useState(false);

  const onClicked = () => {
    setClick(true);
    console.log("clicked");
  }

  return (
    <div className="shortCard">
      <div className="shortCard__cardBorder">
      <p className="shortCard__fullUrl">
        {fullUrl}
      </p>
      </div>
      <p className="shortCard__shortUrl">
        <a
          href={shortUrl}
          target="_blank"
          rel='noreferrer noopener'
          className="shortCard__shortLink"
        >
          {shortUrl}
        </a>
      </p>
      <button
        className={!click ? "shortCard__btn" : "shortCard__btn shortCard__btn--clicked"}
        onClick={onClicked}
      >
        {!click ? "Copy" : "Copied!"}
      </button>
    </div>
  )
}
