import React from 'react'

import { Helmet } from 'react-helmet'

import './programminglanguages.css'

const PROGRAMMINGLANGUAGES = (props) => {
  return (
    <div className="programminglanguages-container">
      <Helmet>
        <title>PROGRAMMINGLANGUAGES - exported project</title>
        <meta
          property="og:title"
          content="PROGRAMMINGLANGUAGES - exported project"
        />
      </Helmet>
      <div className="programminglanguages-frame4">
        <div className="programminglanguages-frame41">
          <div className="programminglanguages-contenttext">
            <span className="programminglanguages-text">
              <span className="programminglanguages-text01">
                Programming language
              </span>
              <span className="programminglanguages-text02">
                {' '}
                is a system of notation for writing computer programs.
              </span>
            </span>
            <span className="programminglanguages-text03">
              <span>List of used languages for each project:</span>
              <br className="programminglanguages-text05"></br>
              <span className="programminglanguages-text06">
                1) Python, SQL
              </span>
              <span className="programminglanguages-text07">Kotlin, SQL</span>
              <span className="programminglanguages-text08">
                {' '}
                School push-button chatbot on Kotlin, based on the social
                networks Vkontakte and Telegram.
              </span>
              <br className="programminglanguages-text09"></br>
              <span className="programminglanguages-text10">
                2) Python
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="programminglanguages-text11">
                (A Python application for monitoring deviations identified as a
                result of pipe rolling production at the Chepetsk Mechanical
                Plant).
              </span>
              <br className="programminglanguages-text12"></br>
              <span className="programminglanguages-text13">
                {' '}
                (Weather application on Python using API and integrated
                database).
              </span>
              <br></br>
            </span>
          </div>
          <img
            alt="image13021"
            src="/external/image13021-8e7h-400h.png"
            className="programminglanguages-image1"
          />
        </div>
        <span className="programminglanguages-text15">
          <span className="programminglanguages-text16">
            Outside of my projects
          </span>
          <span>
            , languages such as Java, C++, C#, Scala, JS, CSS, HTML were also
            used.
          </span>
        </span>
      </div>
    </div>
  )
}

export default PROGRAMMINGLANGUAGES
