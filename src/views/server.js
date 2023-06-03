import React from 'react'

import { Helmet } from 'react-helmet'

import './server.css'

const SERVER = (props) => {
  return (
    <div className="server-container">
      <Helmet>
        <title>SERVER - exported project</title>
        <meta property="og:title" content="SERVER - exported project" />
      </Helmet>
      <div className="server-frame6">
        <div className="server-contenttext">
          <span className="server-text">
            <span className="server-text01">
              In computing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text02">server</span>
            <span className="server-text03">
              {' '}
              is a piece of computer hardware or software that provides
              functionality for other programs or devices, called
            </span>
            <span className="server-text04"> &quot;clients&quot;</span>
            <span className="server-text05">
              . This architecture is called the client–server model.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text06">Servers</span>
            <span className="server-text07">
              {' '}
              can
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text08">provide</span>
            <span className="server-text09">
              {' '}
              various
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text10">functionalities</span>
            <span className="server-text11">
              , often called
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>&quot;services&quot;</span>
          </span>
          <span className="server-text13">
            <span className="server-text14">
              In all my projects,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text15">
              a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="server-text16">laptop acted as a server</span>
            <span>, on which, if necessary, a database was placed.</span>
          </span>
        </div>
        <img
          alt="Picture3022"
          src="/external/picture3022-g9z-400h.png"
          className="server-picture"
        />
      </div>
    </div>
  )
}

export default SERVER
