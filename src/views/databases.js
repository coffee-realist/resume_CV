import React from 'react'

import { Helmet } from 'react-helmet'

import './databases.css'

const DATABASES = (props) => {
  return (
    <div className="databases-container">
      <Helmet>
        <title>DATABASES - exported project</title>
        <meta property="og:title" content="DATABASES - exported project" />
      </Helmet>
      <div className="databases-frame7">
        <div className="databases-contenttext">
          <span className="databases-text">
            <span className="databases-text01">
              In computing, a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="databases-text02">database</span>
            <span>
              {' '}
              is an organized collection of data stored and accessed
              electronically.
            </span>
          </span>
          <span className="databases-text04">
            <span className="databases-text05">
              <span>This system has been used in projects:</span>
              <br></br>
              <span></span>
            </span>
            <span className="databases-text09">
              Weather application on Python using API and integrated database.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="databases-text10">
              <span>(SQLite)</span>
              <br></br>
              <span></span>
            </span>
            <span className="databases-text14">
              School push-button chatbot on Kotlin, based on the social networks
              Vkontakte and Telegram.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>(MySQL)</span>
          </span>
        </div>
        <img
          alt="image13022"
          src="/external/image13022-xuoe-400h.png"
          className="databases-image1"
        />
      </div>
    </div>
  )
}

export default DATABASES
