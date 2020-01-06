import React, { useState } from 'react'
import UrlCard from '../Cards/UrlCard';
import ContentCard from '../Cards/ContentCard';
import CardContent from '../../content/CardContent';
import BrandPic from '../../images/icon-brand-recognition.svg'
import DetailPic from '../../images/icon-detailed-records.svg'
import CustomizePic from '../../images/icon-fully-customizable.svg'

export default function Main() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // tracking url pasted into url card input 
  const handleChange = e => {
    const {value} = e.target;
    setOriginalUrl(() => value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (originalUrl === '') {
      setErrorMessage('Please add a link');
    } else {
      setErrorMessage('');
    }

    console.log('submitted', originalUrl);
  }

  return (
    <div className="main">

      {/* main url card */}
        <UrlCard
          value={originalUrl}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errorMessage={errorMessage}
          errorClass={(errorMessage.length > 0 ) ? 'urlCard__inputError' : null}
        />

      {/* shortened link card */}

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
