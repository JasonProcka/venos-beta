import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Connection from './views/Connection/Connection';
import Connect from './views/Connect/Connect';

class App extends Component {
  state = {
    uid: null
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
      <div className="App-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <RouteProtected path="/connection" component={Connection} />
          <Route path="/connect" render={() => (
            <div className="App-pages-card">
              <Connect />
            </div>
          )}/>
        </Switch>
      </div>
    );
  }

}

const RouteProtected = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to={ {
        pathname: '/login',
        state: {from: renderProps.location}
      } } />
    )
  )}/>
)

export default App;
