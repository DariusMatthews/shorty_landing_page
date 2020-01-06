import React from 'react'
import FooterList from '../List/FooterList';
import FooterContent from '../../content/FooterContent';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

export default function Footer() {
  const [features, resources, company] = FooterContent;

  return (
    <div className="footer">
      <h1 className="footer__title">Shortly</h1>
      <div className="footer__list">
        <FooterList
          title={features.title}
          contents={features.links}
        />
        <FooterList
          title={resources.title}
          contents={resources.links}
        />
        <FooterList
          title={company.title}
          contents={company.links}
        />
      </div>
      <div className="footer__socials">

        <a href="/" className="footer__socialLinks"><img src={facebook} alt="facebook" className="footer__socialIMG" /></a>

        <a href="/" className="footer__socialLinks"><img src={twitter} alt="twitter" className="footer__socialIMG" /></a>

        <a href="/" className="footer__socialLinks"><img src={pinterest} alt="pinterest" className="footer__socialIMG" /></a>

        <a href="/" className="footer__socialLinks"><img src={instagram} alt="instagram" className="footer__socialIMG" /></a>

      </div>
    </div>
  )
}
