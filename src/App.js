import React, { Component } from 'react';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Nav />
        <div className="App-pages-card">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
