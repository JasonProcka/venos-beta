import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Styles
import './Main.css';
// Components
import Home from '../Home/Home';
import Connection from '../Connection/Connection';
import Connect from '../Connect/Connect';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/connection" component={Connection} />
          <Route path="/connect" component={Connect}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
