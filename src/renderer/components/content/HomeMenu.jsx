import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class HomeMenu extends Component {
  render() {
    return (
      <div className='menu-wrapper'>
        <div className='menu-background'></div>
        <div className="app-icons-wrapper">
          <ReactCSSTransitionGroup
            transitionName="cards-enter"
            transitionEnterTimeout={500}
            transitionAppearTimeout={800}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            className="app-icons-container">
            <div className="app-icons">
              <Link to="/pt" className="app-icon">
                <div className="img" style={{backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/6/6c/Popcorn_Time_logo.png)'}}></div>
                <div className="before"></div>
                <div className="after"></div>
              </Link>
              <div className="app-icon netflix">
                <div className="img" style={{backgroundImage:'url(http://imgh.us/Netflix-logo.png)'}}></div>
                <div className="before"></div>
                <div className="after"></div>
              </div>
              <div className="app-icon playmusic">
                <div className="img" style={{backgroundImage:'url(https://lh3.googleusercontent.com/gdBHEk-u3YRDtuCU3iDTQ52nZd1t4GPmldYaT26Jh6EhXgp1mlhQiuLFl4eXDAXzDig5=w300)'}}></div>
                <div className="before"></div>
                <div className="after"></div>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
