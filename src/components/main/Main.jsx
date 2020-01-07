import React, { useState, useEffect } from 'react'
import UrlCard from '../Cards/UrlCard';
import ContentCard from '../Cards/ContentCard';
import CardContent from '../../content/CardContent';
import BrandPic from '../../images/icon-brand-recognition.svg'
import DetailPic from '../../images/icon-detailed-records.svg'
import CustomizePic from '../../images/icon-fully-customizable.svg'

export default function Main() {
  // state for original url, shortened url card and error message
  const [originalUrl, setOriginalUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shortCard, setShortCard] = useState({});
  const [cardArray, setCardArray] = useState([]);

  // api call to shorten links 
  const getLink = () => {
    fetch('https://rel.ink/api/links/', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: originalUrl })
    })
      .then(res => res.json())
      .then(data => setShortCard({
        fullUrl: data.url,
        shortUrl: `https://rel.ink/${data.hashid}`
      }));
  }

  // tracking url input change
  const handleChange = e => {
    const { value } = e.target;
    setOriginalUrl(value);
  }

  // handle submit to shorten url 
  const handleSubmit = e => {
    e.preventDefault();

    if (originalUrl === '') {
      setErrorMessage('Please add a link');
    } else {
      getLink();
      console.log(cardArray);
      setOriginalUrl('');
      setErrorMessage('');
    }
  }

  // useEffect(() => {
  //   const storageArray = localStorage.getItem('cards');
  //   JSON.parse(storageArray);
  //   console.log(storageArray);
  // }, [])

  // effect hook to mount the card array component
  useEffect(() => {
    setCardArray(prevCard => {
      return [...prevCard, shortCard];
    });
    localStorage.setItem('cards', JSON.stringify(cardArray));
  }, [shortCard]);

  return (
    <div className="main">

      {/* main url card */}
      <UrlCard
        value={originalUrl}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />

      {/* shortened link card */}
      {/* filtering array to get rid of initial empty state */
        cardArray.filter(card => Object.keys(card).length !== 0).map((card, index) => (
          <h1 key={index}>
            {card.fullUrl} <br />
            {card.shortUrl}
          </h1>
        ))
      }

      {/* main text content */}
      <div className="main__text">
        <h1 className="main__header">Advanced Statistics</h1>
        <p className="main__content">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      {/* main content cards w/ line connector */}
      <ContentCard
        imgSrc={BrandPic}
        cardTitle={CardContent[0].title}
        cardText={CardContent[0].text}
      />
      <div className="main__bar" />
      <ContentCard
        imgSrc={DetailPic}
        cardTitle={CardContent[1].title}
        cardText={CardContent[1].text}
      />
      <div className="main__bar" />
      <ContentCard
        imgSrc={CustomizePic}
        cardTitle={CardContent[2].title}
        cardText={CardContent[2].text}
      />
    </div>
  )
}
