import React, {Component} from 'react'

export default class PTHead extends Component {
  formatTime(time) {
    return Math.floor(time/60) + ":" + (time%60);
  }
  scroll() {
    document.getElementById('scroll-pt-cover').style.transform = "translateY(-" + document.getElementsByClassName('popcorn-time-main-wrapper')[0].scrollTop/50 +"px)"
    console.log('scroll')
  }
  componentDidMount() {
    this.scroll = this.scroll.bind(this)
    if(document.getElementsByClassName('popcorn-time-main-wrapper')[0])
      document.getElementsByClassName('popcorn-time-main-wrapper')[0].addEventListener('scroll', this.scroll)
  }
  render() {
    return (
      <div className='popcorn-time-main-cover-wrapper' id='scroll-pt-cover'>
        <div className='popcorn-time-main-cover-image' style={{
          backgroundImage: "url("+ this.props.item.images.fanart || this.props.item.images.poster +")"
        }} />
        <div className='popcorn-time-main-cover-color-overlay' />
      </div>
    )
  }
}
