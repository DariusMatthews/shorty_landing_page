import React from 'react'
import FooterList from '../List/FooterList';
import FooterContent from '../../content/FooterContent';

export default function Footer() {
  const [features, resources, company] = FooterContent;

  return (
    <div className="footer">
      <h1 className="footer__title">Shortly</h1>
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
  )
}
