import React, { Component } from 'react'
import axios from 'axios'
import PTHead from '../PopcornTime/PTHead.jsx'
import history from '../../history.js'

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
    this.setState({
      isLoading: false
    })
  }
  back() {
    console.log('hello')
    history.goBack()
  }
  render() {
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
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
