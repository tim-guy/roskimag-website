import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

import logo from './assets/RM_logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to="/submissions">
        <p className="submissions-link">SUBMISSIONS</p>
        </Link>
      </div>
    )
  }
}
