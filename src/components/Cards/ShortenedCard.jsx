import React, {useState} from 'react'

export default function ShortenedCard({fullUrl, shortUrl}) {
  const [click, setClick] = useState(false);
  const [copyLink, setCopyLink] = useState();

  
  // copy link to clipboard on click 
  const onClicked = () => {
    let textField = document.createElement('textarea')
    textField.value = copyLink.innerText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setClick(true);
  }

  return (
    <div className="shortCard">
      <div className="shortCard__cardBorder">
      <p className="shortCard__fullUrl">
        {fullUrl}
      </p>
      </div>
      <p className="shortCard__shortUrl">
        {/* use ref={} to get link information on click  */}
        <a
          href={shortUrl}
          ref={input => setCopyLink(input)}
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
