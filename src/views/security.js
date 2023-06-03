import React from 'react'

import { Helmet } from 'react-helmet'

import './security.css'

const SECURITY = (props) => {
  return (
    <div className="security-container">
      <Helmet>
        <title>SECURITY - exported project</title>
        <meta property="og:title" content="SECURITY - exported project" />
      </Helmet>
      <div className="security-frame3">
        <div className="security-contenttext">
          <span className="security-text">
            <span className="security-text01">IT security</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="security-text03">
              is the protection of computer systems and networks from attack by
              malicious actors.
            </span>
          </span>
          <span className="security-text04">
            <span>
              This sphere has been used in projects as protection against
              sql-injections:
            </span>
            <br></br>
            <span className="security-text07">
              2) Weather application on Python using API and integrated
              database.
            </span>
            <br className="security-text08"></br>
            <span className="security-text09">
              3) School push-button chatbot on Kotlin, based on the social
              networks Vkontakte and Telegram.
            </span>
          </span>
        </div>
        <img
          alt="image23021"
          src="/external/image23021-2noi-400h.png"
          className="security-image2"
        />
      </div>
    </div>
  )
}

export default SECURITY
