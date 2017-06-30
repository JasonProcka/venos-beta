import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './Nav.css';
// components
import UserMenu from './UserMenu/UserMenu';
// Images
import VenosLogo from '../../icons/venoslogo-white.png';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrap">
          <div className="nav-content-container">
            <Link to="/">
              <img className="venos-logo" src={VenosLogo} alt="Venos Logo" />
            </Link>
            <UserMenu />
            <ul className="nav-items">
              <li><Link to="/connect">Connect</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
