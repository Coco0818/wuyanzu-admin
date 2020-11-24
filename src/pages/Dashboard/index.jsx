import React, { Component } from 'react'

import bgImg from '@assets/images/bgImg.jpg'

export default class index extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <img
          className="bgImg"
          src={bgImg}
          alt="背景图"
          style={{ width: '1800px', height: '850px' }}
        />
      </div>
    )
  }
}
