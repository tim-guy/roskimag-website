import React, { Component } from 'react'
import './Mag.css';

import img1 from '../assets/issue_1/1_1.png'
import img2 from '../assets/issue_1/1_2.png'
import img3 from '../assets/issue_1/1_3.png'
import img4 from '../assets/issue_1/1_4.png'
import img5 from '../assets/issue_1/1_5.png'
import img6 from '../assets/issue_1/1_6.png'
import img7 from '../assets/issue_1/1_7.png'
import img8 from '../assets/issue_1/1_8.png'
import img9 from '../assets/issue_1/1_9.png'
import img10 from '../assets/issue_1/1_10.png'
import img11 from '../assets/issue_1/1_11.png'
import img12 from '../assets/issue_1/1_12.png'
import img13 from '../assets/issue_1/1_13.png'
import img14 from '../assets/issue_1/1_14.png'
import img15 from '../assets/issue_1/1_15.png'

export default class Mag001 extends Component {
  render() {
    return (
      <div className="image-container">        
        <img src={img1} className="image"></img>
        <img src={img2} className="image"></img>
        <img src={img3} className="image"></img>
        <img src={img4} className="image"></img>
        <img src={img5} className="image"></img>
        <img src={img6} className="image"></img>
        <img src={img7} className="image"></img>
        <img src={img8} className="image"></img>
        <img src={img9} className="image"></img>
        <img src={img10} className="image"></img>
        <img src={img11} className="image"></img>
        <img src={img12} className="image"></img>
        <img src={img13} className="image"></img>
        <img src={img14} className="image"></img>
        <img src={img15} className="image"></img>
      </div>
    )
  }
}
