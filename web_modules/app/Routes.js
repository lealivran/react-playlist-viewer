import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from "./App"

import Home from "Home"
import Discover from "Discover"

export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<Route path="home" component={Home}/>
        	<Route path="discover" component={Discover}/>
        </Route>
      </Router>
    )
  }
}
