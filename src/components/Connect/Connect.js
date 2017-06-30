import React, { Component } from 'react';
// Styles
import './Connect.css';
// Components
import ConnectHandler from '../ConnectHandler/ConnectHandler';

class Connect extends Component {
  render() {
    return (
      <div>
        <div className="connect-wrap">
          <ConnectHandler />
        </div>
      </div>
    );
  }
}

export default Connect;
