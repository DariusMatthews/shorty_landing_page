import React from 'react'
import UrlCard from '../Cards/UrlCard';
import ContentCard from '../Cards/ContentCard';
import CardContent from '../../content/CardContent';
import BrandPic from '../../images/icon-brand-recognition.svg'
import DetailPic from '../../images/icon-detailed-records.svg'
import CustomizePic from '../../images/icon-fully-customizable.svg'

export default function Main() {
  return (
    <div className="main">
      <div>
        <UrlCard />
      </div>
      <div className="main__text">
        <h1 className="main__header">Advanced Statistics</h1>
        <p className="main__content">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <ContentCard
        imgSrc={BrandPic}
        cardTitle={CardContent[0].title}
        cardText={CardContent[0].text}
      />
      {/* <hr /> */}
      <ContentCard
        imgSrc={DetailPic}
        cardTitle={CardContent[1].title}
        cardText={CardContent[1].text}
      />
      {/* <hr /> */}
      <ContentCard
        imgSrc={CustomizePic}
        cardTitle={CardContent[2].title}
        cardText={CardContent[2].text}
      />
    </div>
  )
}
