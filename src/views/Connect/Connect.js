import React, { Component } from 'react';
// Styles
import './Connect.css';
// Components
import ConnectHandler from '../../components/ConnectHandler/ConnectHandler';

class Connect extends Component {

  render() {
    return (
      <div>
        <div className="connect-wrap">
          <ConnectHandler />
          <h3>Connect with some of our users</h3>
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default Connect;
