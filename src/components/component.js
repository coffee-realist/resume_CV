import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1">
        <div className="component-group3">
          <img
            alt={props.Vector3_alt}
            src={props.Vector3_src}
            className="component-vector3"
          />
        </div>
        <div className="component-group4">
          <img
            alt={props.Vector3_alt1}
            src={props.Vector3_src1}
            className="component-vector31"
          />
          <div className="component-iconsmail"></div>
        </div>
      </div>
      <div className="component-photo">
        <div className="component-clippathgroup">
          <div className="component-group">
            <div className="component-maskgroup">
              <div className="component-group1">
                <img
                  alt={props.Vector_alt}
                  src={props.Vector_src}
                  className="component-vector"
                />
              </div>
            </div>
            <div className="component-maskgroup1">
              <div className="component-group2">
                <img
                  alt={props.Vector_alt1}
                  src={props.Vector_src1}
                  className="component-vector1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-text">
        <div className="component-frame46">
          <div className="component-name">
            <div className="component-name1">
              <span className="component-text01">{props.text1}</span>
              <span className="component-text02">{props.text2}</span>
            </div>
            <span className="component-text03">{props.text}</span>
          </div>
        </div>
        <div className="component-frame59">
          <div className="component-group31">
            <div className="component-frame30">
              <span className="component-text04">
                <span className="">Contact</span>
              </span>
              <div className="component-frame29">
                <div className="component-frame26">
                  <img
                    alt={props.image5_alt}
                    src={props.image5_src}
                    className="component-image5"
                  />
                  <span className="component-text06">
                    <span className="">core@tpu.ru</span>
                  </span>
                </div>
                <div className="component-frame27">
                  <img
                    alt={props.image6_alt}
                    src={props.image6_src}
                    className="component-image6"
                  />
                  <span className="component-text08">
                    <span className="">+7 913 515 47 35</span>
                  </span>
                </div>
                <div className="component-frame28">
                  <img
                    alt={props.image7_alt}
                    src={props.image7_src}
                    className="component-image7"
                  />
                  <span className="component-text10">
                    <span className="">Kartashova Street, House 35</span>
                    <br className=""></br>
                    <span className="">
                      634041, Russia, Tomsk Region, Tomsk
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="component-group41">
            <div className="component-frame25">
              <span className="component-text14">
                <span className="">Short BIO</span>
              </span>
              <span className="component-text16">
                <span className="">
                  A novice backend programmer who wants to work with interesting
                  projects in which it is required to develop a full-fledged
                  application from scratch, productively interacting with the
                  development team, where everyone has a clearly defined role
                  and tasks.
                </span>
                <br className=""></br>
                <span className="">
                  Has experience in application development in a team, as well
                  as a number of completed projects
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image7_alt: 'image73024',
  Vector3_src1: '/external/vector33024-1nxi.svg',
  Vector_alt1: 'Vector3103',
  image5_src: '/external/image53024-2no-200h.png',
  text: 'Junior Backend Developer',
  image6_alt: 'image63024',
  Vector3_alt: 'Vector33024',
  text2: 'TIMOFEY',
  Vector3_src: '/external/vector33024-83yf.svg',
  image7_src: '/external/image73024-lxoh-200h.png',
  Vector_src: '/external/vector3102-zgva.svg',
  text1: 'BOMBOV',
  Vector3_alt1: 'Vector33024',
  image5_alt: 'image53024',
  image6_src: '/external/image63024-t2im-200h.png',
  rootClassName: '',
  Vector_src1: '/external/vector3103-uns.svg',
  Vector_alt: 'Vector3102',
}

AppComponent.propTypes = {
  image7_alt: PropTypes.string,
  Vector3_src1: PropTypes.string,
  Vector_alt1: PropTypes.string,
  image5_src: PropTypes.string,
  text: PropTypes.string,
  image6_alt: PropTypes.string,
  Vector3_alt: PropTypes.string,
  text2: PropTypes.string,
  Vector3_src: PropTypes.string,
  image7_src: PropTypes.string,
  Vector_src: PropTypes.string,
  text1: PropTypes.string,
  Vector3_alt1: PropTypes.string,
  image5_alt: PropTypes.string,
  image6_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Vector_src1: PropTypes.string,
  Vector_alt: PropTypes.string,
}

export default AppComponent
