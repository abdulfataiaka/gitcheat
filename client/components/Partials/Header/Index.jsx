import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @description Header Component
 *
 * @returns { JSX }
 */
const Header = () => (
  <div id="header">
    <div className="pgalign">
      <div className="row">
        <div className="col-6">
          <Link to="/">
            <span id="pgname">
              Git Cheat
            </span>
          </Link>
        </div>

        <div className="col-6">
          <div style={{ display: 'inline-block', float: 'right' }} className="clearfix">
            <Link to="/search">
              <span id="search-icon">
                <i className="fas fa-search" />
              </span>
            </Link>

            <span id="auth-button">Authenticate</span>
            <span id="user-logo">G</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
