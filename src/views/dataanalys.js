import React from 'react'

import { Helmet } from 'react-helmet'

import './dataanalys.css'

const DATAANALYS = (props) => {
  return (
    <div className="dataanalys-container">
      <Helmet>
        <title>DATAANALYS - exported project</title>
        <meta property="og:title" content="DATAANALYS - exported project" />
      </Helmet>
      <div className="dataanalys-frame8">
        <div className="dataanalys-contenttext">
          <span className="dataanalys-text">
            <span className="dataanalys-text1">Data analysis</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="dataanalys-text3">
              is a process of inspecting, cleansing, transforming, and modeling
              data with the goal of discovering useful information, informing
              conclusions, and supporting decision-making.
            </span>
          </span>
          <span className="dataanalys-text4">
            <span className="dataanalys-text5">
              This approach has been used in all my projects when
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="dataanalys-text6">
              collecting information from users to improve the application
            </span>
            <span className="dataanalys-text7">
              {' '}
              being developed, as well as to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="dataanalys-text8">
              search for opportunities to optimize existing production.
            </span>
          </span>
        </div>
        <img
          alt="image23022"
          src="/external/image23022-26a-400h.png"
          className="dataanalys-image2"
        />
      </div>
    </div>
  )
}

export default DATAANALYS
