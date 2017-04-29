import React, { Component } from 'react'
import axios from 'axios'
import PTHead from '../PopcornTime/PTHead.jsx'
import history from '../../history.js'
import { Link } from 'react-router-dom'
import Tabs from '../PopcornTime/Tabs.jsx';
import Pane from '../PopcornTime/Tabs/Pane.jsx';

export default class PopcornTimeSummary extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
    this.fetchMovie = this.fetchMovie.bind(this)
    this.fetchShow = this.fetchShow.bind(this)
    this.fetchAnime = this.fetchAnime.bind(this)
    this.finishLoading = this.finishLoading.bind(this)
    this.getSeasons = this.getSeasons.bind(this)
  }
  componentWillMount() {
    switch(this.props.match.params.type) {
      case 'movie':
        this.fetchMovie()
        break;
      case 'show':
        this.fetchShow()
        break;
      case 'anime':
        this.fetchAnime()
        break;
    }
  }
  fetchMovie() {
    console.log("Fetching movie.")
    axios.get(`https://tv-v2.api-fetch.website/movie/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
          type: 'movie'
        })
        this.finishLoading()
      })
  }
  fetchShow() {
    console.log("Fetching show.")
    axios.get(`https://tv-v2.api-fetch.website/show/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          data: response.data,
          type: 'show'
        })
        console.log("Data")
        console.log(response.data)
        this.finishLoading()
      })
  }
  fetchAnime() {
    console.log("Fetching anime.")
    axios.get(`https://tv-v2.api-fetch.website/anime/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          data: response.data,
          type: 'anime'
        })
        this.finishLoading()
      })
  }
  finishLoading() {
    this.getSeasons((seasons) => this.setState({ isLoading: false, seasons: seasons }))
  }
  back() {
    console.log('hello')
    history.goBack()
  }
  getSeasons(callback) {
    let seasonsSet = new Set()
    for (var i = 0; i < this.state.data.episodes.length; i++) {
      seasonsSet.add(this.state.data.episodes[i].season)
    }
    console.log(seasonsSet)
    var seasons = [];
    for (let item of seasonsSet.values()) {
      var season = {
        name: "Season " + item,
        num: item,
        episodes: []
      }
      var episodes = [];
      for (var i = 0; i < this.state.data.episodes.length; i++) {
        if(this.state.data.episodes[i].season == item) {
          episodes.push(this.state.data.episodes[i])
        }
      }
      episodes.sort(function(a, b) {
        if(a.episode < b.episode) return -1;
        if(a.episode > b.episode) return 1;
        return 0;
      })
      season.episodes = episodes;
      seasons.push(season)
    };
    seasons.sort(function(a, b) {
      if(a.num < b.num) return -1;
      if(a.num > b.num) return 1;
      return 0;
    })
    callback(seasons)
    // var tempSeasons = []
    // console.log(this.state.data.num_seasons)
    // for(var i = 0; i < this.state.data.num_seasons; i++) {
    //   var name = "Season " + (i+1)
    //   tempSeasons.push(name)
    // }
    // return tempSeasons
  }
  render() {
    if(this.state.data) {
      var seasons = this.state.seasons
    }
    return (
      <div className='popcorn-time-summary-wrapper'>
        {this.state.isLoading ?
          (<div className='loader-wrapper'>
            <div className='loader-box'>
              <i className='material-icons'>autorenew</i>
            </div>
          </div>)
          :
          (
            <div className='summary-wrap'>
              <PTHead item={this.state.data} />
              <div className='summary-content'>
                <div className='summary-header-content'>
                  <i onClick={this.back.bind(this)} className='material-icons back-arrow'>arrow_back</i>
                  <span className='summary-title'>{this.state.data.title}</span>
                </div>
                <div className='tabs-section'>
                  <Tabs selected={0}>
                    <Pane label="Summary">
                      <div>{this.state.data.synopsis}</div>
                    </Pane>
                    {seasons.map((item, i) => {
                      console.log('hel')
                      return (<Pane key={i} ref="hi" label={item.name}>
                        {item.episodes.map((episode, iter) => {
                          return (<div className='pt-episode' style={{
                            animationDelay: (0.05 * iter) + "s"
                          }}>
                            <div className='pt-ep-wrap'>
                              <div className='badge'>
                                <span className='episode-badge-num'>{iter+1}</span>
                              </div>
                              <div className='details'>
                                <span className='episode-title'>{episode.title}</span>
                                <span className='episode-desc'>{episode.overview.trunc(250)}</span>
                              </div>
                            </div>
                          </div>)
                        })}
                      </Pane>);
                    })}
                  </Tabs>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
