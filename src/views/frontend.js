import React from 'react'

import { Helmet } from 'react-helmet'

import './frontend.css'

const FRONTEND = (props) => {
  return (
    <div className="frontend-container">
      <Helmet>
        <title>FRONTEND - exported project</title>
        <meta property="og:title" content="FRONTEND - exported project" />
      </Helmet>
      <div className="frontend-frame5">
        <div className="frontend-contenttext">
          <span className="frontend-text">
            <span className="frontend-text1">
              In software development, the term
            </span>
            <span className="frontend-text2"> front-end</span>
            <span>
              {' '}
              is the presentation layer (interface) when dividing tasks between
              the presentation layer (frontend) and the data access layer
              (backend).
            </span>
          </span>
          <span className="frontend-text4">
            <span className="frontend-text5">
              This part has been used in all my projects as a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="frontend-text6">
              desktop application interface
            </span>
            <span className="frontend-text7">
              {' '}
              or a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="frontend-text8">
              social network bot interface.
            </span>
          </span>
        </div>
        <img
          alt="Picture3022"
          src="/external/picture3022-77lc-400h.png"
          className="frontend-picture"
        />
      </div>
    </div>
  )
}

export default FRONTEND
