import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @description Header Component
 *
 * @returns { JSX }
 */
const View = ({ auth: { email, loggedIn }, logout, openDrawer }) => (
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

            <button
              type="button"
              id="auth-button"
              className={`${loggedIn ? 'logout' : ''}`}
              onClick={
                loggedIn
                  ? () => logout()
                  : () => openDrawer()
              }
            >
              {
                loggedIn
                  ? 'Logout'
                  : 'Authenticate'
              }
            </button>

            <span
              id="user-logo"
              className={`${loggedIn ? 'logout' : ''}`}
            >
              {
                loggedIn
                  ? email[0].toUpperCase()
                  : 'G'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

View.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    email: PropTypes.string,
    loggedIn: PropTypes.bool
  }).isRequired
};

export default View;
