import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'
import api from '../views/api'
import git from '../views/git.js'
import datBa from '../views/databases.js'
import datAn from '../views/dataanalys.js'
import front from '../views/frontend.js'
import server from '../views/server.js'
import sec from '../views/security.js'
import proLang from '../views/programminglanguages.js'
import {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

const Component1 = (props) => {
    const [isHoveringApi, setIsHoveringApi] = useState(false);
    const [isHoveringGit, setIsHoveringGit] = useState(false);
    const [isHoveringDatBa, setIsHoveringDatBa] = useState(false);
    const [isHoveringDatAn, setIsHoveringDatAn] = useState(false);
    const [isHoveringFront, setIsHoveringFront] = useState(false);
    const [isHoveringServer, setIsHoveringServer] = useState(false);
    const [isHoveringSec, setIsHoveringSec] = useState(false);
    const [isHoveringProLang, setIsHoveringProLang] = useState(false);
    const handleMouseOverApi = () => {
        setIsHoveringApi(true);
    };
    const isHoveringTriangles = () => {
        return isHoveringDatAn || isHoveringDatBa || isHoveringSec || isHoveringFront || isHoveringServer || isHoveringProLang || isHoveringApi || isHoveringGit;
    }
    const handleMouseOutApi = () => {
        setIsHoveringApi(false);
    };
    const handleMouseOverGit = () => {
        setIsHoveringGit(true);
    };

    const handleMouseOutGit = () => {
        setIsHoveringGit(false);
    };
    const handleMouseOverDatBa = () => {
        setIsHoveringDatBa(true);
    };

    const handleMouseOutDatBa = () => {
        setIsHoveringDatBa(false);
    };
    const handleMouseOverDatAn = () => {
        setIsHoveringDatAn(true);
    };

    const handleMouseOutDatAn = () => {
        setIsHoveringDatAn(false);
    };
    const handleMouseOverFront = () => {
        setIsHoveringFront(true);
    };

    const handleMouseOutFront = () => {
        setIsHoveringFront(false);
    };
    const handleMouseOverServer = () => {
        setIsHoveringServer(true);
    };

    const handleMouseOutServer = () => {
        setIsHoveringServer(false);
    };
    const handleMouseOverSec = () => {
        setIsHoveringSec(true);
    };

    const handleMouseOutSec = () => {
        setIsHoveringSec(false);
    };
    const handleMouseOverProLang = () => {
        setIsHoveringProLang(true);
    };

    const handleMouseOutProLang = () => {
        setIsHoveringProLang(false);
    };
    return (
        <div
            className={`component1-container ${props.rootClassName}`}>
            <img
                onMouseEnter={handleMouseOverGit}
                onMouseLeave={handleMouseOutGit}
                src={props.PolyGIT_src}
                alt={props.PolyGIT_alt}
                className="component1-poly-git"
            />
            {isHoveringGit && (
                <Router>
                    <div>
                        <Route component={git} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverSec}
                onMouseLeave={handleMouseOutSec}
                src={props.PolySec_src}
                alt={props.PolySec_alt}
                className="component1-poly-sec"
            />
            {isHoveringSec && (
                <Router>
                    <div>
                        <Route component={sec} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverServer}
                onMouseLeave={handleMouseOutServer}
                src={props.PolyServ_src}
                alt={props.PolyServ_alt}
                className="component1-poly-serv"
            />
            {isHoveringServer && (
                <Router>
                    <div>
                        <Route component={server} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverProLang}
                onMouseLeave={handleMouseOutProLang}
                src={props.PolyPL_src}
                alt={props.PolyPL_alt}
                className="component1-poly-pl"
            />
            {isHoveringProLang && (
                <Router>
                    <div>
                        <Route component={proLang} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverFront}
                onMouseLeave={handleMouseOutFront}
                src={props.PolyFront_src}
                alt={props.PolyFront_alt}
                className="component1-poly-front"
            />
            {isHoveringFront && (
                <Router>
                    <div>
                        <Route component={front} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverDatBa}
                onMouseLeave={handleMouseOutDatBa}
                src={props.PolyDB_src}
                alt={props.PolyDB_alt}
                className="component1-poly-db"
            />
            {isHoveringDatBa && (
                <Router>
                    <div>
                        <Route component={datBa} exact path="/"/>
                    </div>
                </Router>
            )}
            <img
                onMouseEnter={handleMouseOverDatAn}
                onMouseLeave={handleMouseOutDatAn}
                src={props.PolyDA_src}
                alt={props.PolyDA_alt}
                className="component1-poly-da"
            />
            {isHoveringDatAn && (
                <Router>
                    <div>
                        <Route component={datAn} exact path="/"/>
                    </div>
                </Router>
            )}<img
            onMouseEnter={handleMouseOverApi}
            onMouseLeave={handleMouseOutApi}
            src={props.PolyAPI_src}
            alt={props.PolyAPI_alt}
            className="component1-poly-api"
        />
            {isHoveringApi && (
                <Router>
                    <div>
                        <Route component={api} exact path="/"/>
                    </div>
                </Router>
            )}
        </div>
    )
}

Component1.defaultProps = {
    PolyGIT_src: '/external/polygon13362-723f.svg',
    PolyGIT_alt: 'Polygon13362',
    PolySec_src: '/external/polygon13362-723f.svg',
    PolySec_alt: 'Polygon13362',
    PolyServ_src: '/external/polygon13362-723f.svg',
    PolyServ_alt: 'Polygon13362',
    PolyPL_src: '/external/polygon13362-723f.svg',
    PolyPL_alt: 'Polygon13362',
    PolyFront_src: '/external/polygon13362-723f.svg',
    PolyFront_alt: 'Polygon13362',
    PolyDB_src: '/external/polygon13362-723f.svg',
    PolyDB_alt: 'Polygon13362',
    PolyDA_src: '/external/polygon13362-723f.svg',
    PolyDA_alt: 'Polygon13362',
    PolyAPI_src: '/external/polygon13362-723f.svg',
    PolyAPI_alt: 'Polygon13362',
    rootClassName: '',
}

Component1.propTypes = {
    PolyGIT_src: PropTypes.string,
    PolyGIT_alt: PropTypes.string,
    PolySec_src: PropTypes.string,
    PolySec_alt: PropTypes.string,
    PolyServ_src: PropTypes.string,
    PolyServ_alt: PropTypes.string,
    PolyPL_src: PropTypes.string,
    PolyPL_alt: PropTypes.string,
    PolyFront_src: PropTypes.string,
    PolyFront_alt: PropTypes.string,
    PolyDB_src: PropTypes.string,
    PolyDB_alt: PropTypes.string,
    PolyDA_src: PropTypes.string,
    PolyDA_alt: PropTypes.string,
    PolyAPI_src: PropTypes.string,
    PolyAPI_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default Component1
