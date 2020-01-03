import React from 'react'
import FooterContent from '../../content/FooterContent';

export default function Footer() {
  const [features, resources, company] = FooterContent;

  return (
    <div className="footer">
      <h1 className="footer__title">Shortly</h1>
    </div>
  )
}
