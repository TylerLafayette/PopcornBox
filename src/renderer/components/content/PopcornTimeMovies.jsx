import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PTHead from '../PopcornTime/PTHead.jsx'
import PTItem from '../PopcornTime/PTItem.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class PopcornTime extends Component {
  constructor() {
    super()
    this.state = {
      currSelected: 0,
      spinner: true,
      shows: [
      ],
      movies: [],
      animes: [],
      activePage: 'movies',
      types: [
        {
          name: "Movies",
          type: "movies",
          url: "/pt/movies"
        },
        {
          name: "Shows",
          type: "shows",
          url: "/pt/shows"
        },
        {
          name: "Anime",
          type: "anime",
          url: "/pt/anime"
        },
      ]
    }
    axios.get('https://tv-v2.api-fetch.website/movies/1?sort=trending').then((response) => {
      this.setState({
        shows: response.data
      })
      console.log('shows updated');
    })
  }
  keyUp(e) {
    switch(e.keyCode) {
      case 39:
        this.setState({currSelected: this.state.currSelected + 1})
        e.preventDefault();
        break;
      case 37:
        this.setState({currSelected: this.state.currSelected - 1})
        e.preventDefault();
        break;
      case 40:
        this.setState({currSelected: this.state.currSelected + 6})
        e.preventDefault();
        break;
      case 38:
        this.setState({currSelected: this.state.currSelected - 6})
        e.preventDefault();
        break;
      case 13:
        document.getElementsByClassName('popcorn-time-covers-item')[this.state.currSelected].click();
    }
  }
  componentDidMount() {
    this.keyUp = this.keyUp.bind(this)
    this.setState({
      activePage: this.props.match.params.type
    })
    console.log(this)
    document.addEventListener('keyup', this.keyUp, false);
  }
  render() {
    return (
      <div className='popcorn-time-main-wrapper'>
        <div className='popcorn-time-top-content'>
          <div className='popcorn-time-main-header'>
            <span className='popcorn-time-main-header-head-text'>Popcorn Time</span>
          </div>
          {
            this.state.shows[0] ?
            <PTHead movie={true} item={this.state.shows[0]}/>
            :
            null
          }
        </div>
        <div className='popcorn-time-main-content'>
          <div className='popcorn-time-main-content-header'>
            <div className='popcorn-time-tab-center-wrap'>
              <div className='popcorn-time-tabs'>
                <Link to="/pt/movies">
                  <div className={
                    ('movies' == 'movies') ?
                      'pt-tab active'
                    :
                      'pt-tab'
                  }>movies</div>
                </Link>
                <Link to="/pt/shows">
                  <div className={
                    ('movies' == 'shows') ?
                      'pt-tab active'
                    :
                      'pt-tab'
                  }>shows</div>
                </Link>
                <Link to="/pt/anime">
                  <div className={
                    ('movies' == 'anime') ?
                      'pt-tab active'
                    :
                      'pt-tab'
                  }>anime</div>
                </Link>
              </div>
            </div>
          </div>
          <div className='popcorn-time-covers-container'>
            <div className='popcorn-time-covers-flexbox'>
              {this.state.shows.map((item, i) => {
                return(
                  <PTItem currSelected={this.state.currSelected} item={item} i={i} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
