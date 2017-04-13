import React, { Component } from 'react'

export default class PopcornTime extends Component {
  render() {
    return (
      <div className='popcorn-time-main-wrapper'>
        <div className='popcorn-time-top-content'>
          <div className='popcorn-time-main-header'>
            <span className='popcorn-time-main-header-head-text'>Popcorn Time</span>
          </div>
          <div className='popcorn-time-main-cover-wrapper'>
            <div className='popcorn-time-main-cover-image' style={{
              backgroundImage: "url(http://cdn1-www.comingsoon.net/assets/uploads/gallery/sleepless/sleepless_poster_final.jpg)"
            }} />
            <div className='popcorn-time-main-cover-info-wrapper'>
              <span className='popcorn-time-main-cover-title-text'>Sleepless</span>
              <span className='popcorn-time-main-cover-subtext'>R • 1:35 • Action • 5.5/10</span>
              <div className='popcorn-time-main-cover-info-rating-bar-wrapper'>
                <div className='popcorn-time-main-cover-info-rating-bar-inner' style={{
                  width: ((5.5/10) * 100) + "%"
                }}/>
              </div>
            </div>
            <div className='popcorn-time-main-cover-color-overlay' />
          </div>
        </div>
        <div className='popcorn-time-main-content'>
          <div className='popcorn-time-main-content-header'>
            <div className='popcorn-time-tab-center-wrap'>
              <div className='popcorn-time-tabs'>
                <div className='pt-tab active'>MOVIES</div>
                <div className='pt-tab'>SHOWS</div>
                <div className='pt-tab'>ANIME</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
