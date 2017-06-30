import React, { Component } from 'react';
// Styles
import './Home.css';
// Components
import ConnectHandler from '../../components/ConnectHandler/ConnectHandler';

class Home extends Component {
  render() {
    return (
      <div>
        Main page
        <ConnectHandler />
      </div>
    );
  }
}

export default Home;
