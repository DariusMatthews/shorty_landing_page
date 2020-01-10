import React, { useState, useEffect } from 'react'
import UrlCard from '../Cards/UrlCard';
import ContentCard from '../Cards/ContentCard';
import CardContent from '../../content/CardContent';
import ShortenedCard from '../Cards/ShortenedCard';
import BrandPic from '../../images/icon-brand-recognition.svg';
import DetailPic from '../../images/icon-detailed-records.svg';
import CustomizePic from '../../images/icon-fully-customizable.svg';

export default function Main() {
  // state for original url, shortened url card and error message
  const [submitted, setSubmit] = useState(false);
  const [originalUrl, setOriginalUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [shortenedCard, setShortCard] = useState({});
  const [cardArray, setCardArray] = useState([]);
  const [storageArray, setStorageArray] = useState(null);

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

  // handle submit of link form
  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(true);

    if (originalUrl === '') {
      setErrorMessage('Please add a link');
    } else {
      getLink();
      setOriginalUrl('');
      setErrorMessage('');
    }
  }

  // setting local storage if submitted
  if (submitted === true) {
    localStorage.setItem('cards', JSON.stringify(cardArray));
  }

  // effect hook to mount storage on initial render 
  useEffect(() => {
    setStorageArray(JSON.parse(localStorage.getItem('cards')));
  }, []);

  // effect hook to mount the card array component
  useEffect(() => {
    setCardArray(prevCard => {
      return [...prevCard, shortenedCard];
    });
  }, [shortenedCard]);


  // return statement 
  return (
    <div className="main">

      {/* main url card */}
      <UrlCard
        value={originalUrl}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />

      {/*
        SHORTENED LINK CARDS
          - two arrays mapped out
            * one for storage
            * other for new links added

          - storage array only maps if state isn't null
            
          - filtering arrays to get rid of initial empty state 
      */}
      <div className="main__links">
        {/* Storage Links */
          storageArray !== null && storageArray.filter(storage => Object.keys(storage).length !== 0).map((card, index) => (
            <ShortenedCard
              key={index}
              fullUrl={card.fullUrl}
              shortUrl={card.shortUrl}
            />
          ))
        }

        {/* New Links */
          cardArray.filter(card => Object.keys(card).length !== 0).map((card, index) => (
            <ShortenedCard
              key={index}
              fullUrl={card.fullUrl}
              shortUrl={card.shortUrl}
            />
          ))
        }
      </div>

      {/* main text content */}
      <div className="main__text">
        <h1 className="main__header">Advanced Statistics</h1>
        <p className="main__content">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>

      {/* main content cards w/ line connector */}
      <ContentCard
        imgSrc={BrandPic}
        imgStyle="main__graph"
        cardTitle={CardContent[0].title}
        cardText={CardContent[0].text}
        contentStyle="main__br"
      />
      <div className="main__bar main__dr" />
      <ContentCard
        imgSrc={DetailPic}
        cardTitle={CardContent[1].title}
        cardText={CardContent[1].text}
        contentStyle="main__dr"
      />
      <div className="main__bar main__fc" />
      <ContentCard
        imgSrc={CustomizePic}
        cardTitle={CardContent[2].title}
        cardText={CardContent[2].text}
        contentStyle="main__fc"
      />
    </div>
  )
}
