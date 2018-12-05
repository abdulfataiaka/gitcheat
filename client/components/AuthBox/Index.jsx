import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 *
 *
 * @description AuthBox Component
 *
 * @returns { JSX }
 */
const AuthBox = () => (
  <div id="auth-box">
    <div className="overlay" />
    <div className="box">
      <button
        className="close-btn"
        type="button"
      >
        <i className="fas fa-angle-right" />
      </button>

      <h1>Administrator Login</h1>
      <img src="/images/user.png" alt="user" />

      <div className="field-group">
        <label>Email Address</label>
        <input type="text" />
      </div>

      <div className="field-group">
        <label>Password</label>
        <input type="password" />
      </div>

      <button
        className="login-btn"
        type="button"
      >
        Login
      </button>

      <p>
        Provide your email and password as an admin to manage
        categories and helps on the application.
      </p>
    </div>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

AuthBox.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBox);
