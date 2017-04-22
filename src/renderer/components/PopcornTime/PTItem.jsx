import React, { Component } from 'react'
import history from '../../history.js'

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
  clicked() {
    const { item } = this.props;
    history.push('/movies/' + item._id);
  }
  render() {
    const { i, item, currSelected } = this.props;
    console.log(this)
    return (
      <div onClick={this.clicked.bind(this)} ref="me"
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
            <div className='popcorn-time-covers-cover-info-fab'><i className="material-icons">play_arrow</i></div>
            <span className='popcorn-time-covers-cover-info-title'>{item.title}</span>
          </div>
        </div>
      </div>
    )
  }
}
