import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {LOGIN, HOME} from '../constants';
class Header extends Component {
  render() {
    return (
      <nav id="navigation" className="navigation-nav-container">
        <Link className="navigation-logo" to={HOME}>Be Prepared</Link>
        <Link to={LOGIN}>
          <div className="navigation-auth">
            <button className="navigation-auth-login-button">Log In</button>
          </div>
        </Link>
      </nav>
    );
  }
}

export default Header;
