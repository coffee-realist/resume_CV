import React from 'react'

import { Helmet } from 'react-helmet'

import './api.css'

const API = (props) => {
  return (
    <div className="api-container">
      <div className="api-frame1">
        <div className="api-contenttext">
          <span className="api-text">
            <span className="api-text01">API</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="api-text03">
              - An application programming interface (API) is a way for two or
              more computer programs to communicate with each other.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="api-text05">
            <span className="api-text06">
              This tool has been used in projects:
            </span>
            <br className="api-text07"></br>
            <br className="api-text08"></br>
            <span className="api-text09">
              1) Weather application on Python using API and integrated
              database.
            </span>
            <br className="api-text10"></br>
            <br className="api-text11"></br>
            <span className="api-text12">
              2) School push-button chatbot on Kotlin, based on the social
              networks Vkontakte and Telegram.
            </span>
          </span>
        </div>
        <img
          alt="Picture2872"
          src="/external/picture2872-fadx-400h.png"
          className="api-picture"
        />
      </div>
    </div>
  )
}

export default API
