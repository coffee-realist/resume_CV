import React from 'react'

import { Helmet } from 'react-helmet'

import './git.css'

const GIT = (props) => {
  return (
    <div className="git-container">
      <Helmet>
        <title>GIT - exported project</title>
        <meta property="og:title" content="GIT - exported project" />
      </Helmet>
      <div className="git-frame2">
        <div className="git-contenttext">
          <span className="git-text">
            <span className="git-text1">Git</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="git-text3">
              is a distributed version control system that tracks changes in any
              set of computer files.
            </span>
          </span>
          <span className="git-text4">
            <span>This system has been used in projects:</span>
            <br></br>
            <span className="git-text7">
              1) School push-button chatbot on Kotlin, based on the social
              networks Vkontakte and Telegram.
            </span>
            <br></br>
          </span>
        </div>
        <img
          alt="image13021"
          src="/external/image13021-hxdb-400h.png"
          className="git-image1"
        />
      </div>
    </div>
  )
}

export default GIT
