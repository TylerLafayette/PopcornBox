import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class HomeMenu extends Component {
  constructor() {
    super()
    this.state = {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        diem: 'AM'
      }
    }
  }
  getTime() {
    var currentTime = new Date();
    var diem = 'AM';
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if (h === 0) {
      h = 12;
    } else if (h > 12) {
      h = h - 12;
      diem = 'PM';
    }

    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    var output = {
      hours: h,
      minutes: m,
      seconds: s,
      diem: diem
    };
    return output;
  }
  fetchTime() {
    this.setState({
      time: this.getTime()
    })
  }
  componentWillMount() {
    window.timeInterval = setInterval(this.fetchTime.bind(this), 100);
  }
  componentWillUnmount() {
    clearInterval(window.timeInterval);
  }
  render() {
    return (
      <div className='menu-wrapper'>
        <div className='menu-top-left-wrapper'>
          <span className='menu-time'>{this.state.time.hours}:{this.state.time.minutes} {this.state.time.diem}</span>
        </div>
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
