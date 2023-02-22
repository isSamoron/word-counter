import React from 'react'
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";

export default function Navbar(props) {
  const myStyle = {
    backgroundColor: props.mode === 'darkBlue'? '#292b2c': props.mode === 'blue'? '#6080b6': props.mode === 'skin'? '#fa9f78':'white',
    color: props.mode === 'darkBlue' ? 'white' : 'black'
  }
  return (
    <nav className={`navbar navbar-expand-lg`} style={myStyle}>
      <div className="container-fluid" >
        <a className="navbar-brand" to="#" style={myStyle}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={myStyle}>Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about" style={myStyle}>About</Link>
            </li> */}
          </ul>
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
          </div> */}
          <div className={`form-check form-check-inline rounded-circle d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleModeBlue} style={{ backgroundColor: '#6096B4' }}>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" style={{ backgroundColor: '#6096B4' }} />
          </div>
          <div className={`form-check form-check-inline rounded-circle d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleModeSkin} style={{ backgroundColor: '#FAAB78' }}>
            <input className="form-check-input bg-navy" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" style={{ backgroundColor: '#FAAB78' }} />
          </div>
          <div className={`form-check form-check-inline rounded-circle d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleModeDark} style={{ backgroundColor: '#332C39' }}>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{ backgroundColor: '#332C39' }} />
          </div>
          <div className={`form-check form-check-inline rounded-circle d-flex justify-content-center text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleModeWhite} style={{ backgroundColor: '#F0EEED' }}>
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option4" />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string }