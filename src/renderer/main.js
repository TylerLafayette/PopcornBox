import React, { Component } from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Wrapper from './components/layouts/Wrapper.jsx'
import HomeMenu from './components/content/HomeMenu.jsx'
import PopcornTime from './components/content/PopcornTime.jsx'
window.onload = function() {
  console.log('fully loaded');
}

render(
<Router>
  <Wrapper>
    <Route exact path="/" component={HomeMenu}/>
    <Route exact path="/pt" component={PopcornTime}/>
  </Wrapper>
</Router>
, document.getElementById('app'))
