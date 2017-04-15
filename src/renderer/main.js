import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Wrapper from './components/layouts/Wrapper.jsx'
import HomeMenu from './components/content/HomeMenu.jsx'
import PopcornTimeMovies from './components/content/PopcornTimeMovies.jsx'
import PopcornTimeShows from './components/content/PopcornTimeShows.jsx'
import PopcornTimeAnime from './components/content/PopcornTimeAnime.jsx'
window.onload = function() {
  console.log('fully loaded');
}

render(
<Router>
  <Wrapper>
    <Route exact path="/" component={HomeMenu}/>
    <Route exact path="/pt/movies" component={PopcornTimeMovies}/>
    <Route exact path="/pt/shows" component={PopcornTimeShows}/>
    <Route exact path="/pt/anime" component={PopcornTimeAnime}/>
  </Wrapper>
</Router>
, document.getElementById('app'))
