import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Styles
import './Main.css';
// Components
import Home from '../views/Home/Home';
import Connection from '../views/Connection/Connection';
import Connect from '../views/Connect/Connect';

class Main extends Component {
  constructor(props) {
    super();
    state = {
      uid: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid)
        this.setState({uid: user.uid})
      } else {
        window.localStorage.removeItem(storageKey)
        this.setState(uid: null)
      }
    })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/connection" component={Connection} />
          <Route path="/connect" render={() => (
            <Connect />
          )}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
