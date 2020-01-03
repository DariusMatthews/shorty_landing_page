import React from 'react'

export default function FooterList({ title, contents }) {
  return (
    <div className="Flist">
      <h2 className="Flist__title">{title}</h2>
      <ul className="Flist__list">
      {contents.map((content, index) =>
        <li 
        key={index}
        className="Flist__listItem">
          <a
          href="#" 
          className="Flist__listLink">
            {content}
          </a>
        </li>
      )}
      </ul>
    </div>
  )
}
