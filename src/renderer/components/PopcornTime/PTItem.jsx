import React, { Component } from 'react'

export default class PTItem extends Component {
  constructor() {
    super()
    this.state = {
      lastPos: 0
    }
    this.findPos = this.findPos.bind(this)
  }
  findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
        return [curtop];
    }
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    if(this.props.currSelected == this.props.i) {
      var toScroll = this.findPos(this.refs.me);
      document.getElementsByClassName('popcorn-time-main-wrapper')[0].scrollTop = this.findPos(this.refs.me) - ((window.innerHeight /2) - (375/2));
    }
  }
  render() {
    const { i, item, currSelected } = this.props;
    console.log(this)
    return (
      <div ref="me"
        style={
          {
            animationDelay: ((75) * (i + 1)) + "ms",
            animationFillMode: 'forwards'
          }
        }
        className={currSelected == i ? 'popcorn-time-covers-item selected' : 'popcorn-time-covers-item'}>
        <div className='popcorn-time-covers-cover-img' style={{
          backgroundImage: 'url('+ item.images.poster.replace('images/posterholder.png', '../assets/broken-image-01.png') +')'
        }}>
          <div className='popcorn-time-covers-cover-info-panel'>
            <div className='popcorn-time-covers-cover-info-fab'></div>
            <span className='popcorn-time-covers-cover-info-title'>{item.title}</span>
          </div>
        </div>
      </div>
    )
  }
}
