import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import history from './history.js'
import Wrapper from './components/layouts/Wrapper.jsx'
import HomeMenu from './components/content/HomeMenu.jsx'
import PopcornTimeMovies from './components/content/PopcornTimeMovies.jsx'
import PopcornTimeShows from './components/content/PopcornTimeShows.jsx'
import PopcornTimeAnime from './components/content/PopcornTimeAnime.jsx'
import PopcornTimeSummary from './components/content/PopcornTimeSummary.jsx'
window.onload = function() {
  console.log('fully loaded');
}
String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '...' : this;
      };
render(
<Router history={history}>
  <Wrapper>
    <Route exact path="/" component={HomeMenu}/>
    <Route exact path="/pt/movies" component={PopcornTimeMovies}/>
    <Route exact path="/pt/shows" component={PopcornTimeShows}/>
    <Route exact path="/pt/anime" component={PopcornTimeAnime}/>
    <Route exact path="/pt/:type/:id" component={PopcornTimeSummary}/>
  </Wrapper>
</Router>
, document.getElementById('app'))
