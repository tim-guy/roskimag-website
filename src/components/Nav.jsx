import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

import logo from './assets/RM_logo.png';
import stickerMuleLogo from './assets/sticker_mule_logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <Link to="/archive">
        <p className="archive-link">MAGS</p>
        </Link>
        <Link to="/submissions">
        <p className="submissions-link">SUBMISSIONS</p>
        </Link>
        <a href="https://roskimag.home.blog">
        <p className="blog-link">BLOG</p>
        </a>
        <a href="https://www.stickermule.com/">
        <img src={stickerMuleLogo} alt="stickerMuleLogo" className="sticker-mule-logo" />
        </a>
      </div>
    )
  }
}
