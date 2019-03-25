import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Archive.css';

export default class Archive extends Component {
  mouseOverLink() {
    document.getElementById("root").style.background = "blue";
  }

  mouseOutLink() {
    document.getElementById("root").style.background = "";
  }

  render() {
    return (
      <div className="mag-container">
        <Link to="/archive/006"><a className="mag">006</a></Link>
        <Link to="/archive/005"><a className="mag">005</a></Link>
        <Link to="/archive/004"><a className="mag">004</a></Link>
        <Link to="/archive/003"><a className="mag">003</a></Link>
        <Link to="/archive/002"><a className="mag">002</a></Link>
        <Link to="/archive/001"><a className="mag" onMouseOver={this.mouseOverLink()} onMouseOut={this.mouseOutLink()}>001</a></Link>
      </div>
    )
  }
}
