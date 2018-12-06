import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

/**
 *
 *
 * @description AuthBox Component
 *
 * @returns { JSX }
 */
const View = ({
  closeDrawer,
  show,
  onSubmit,
  onChange,
  loginInProgress,
  error,
  email,
  password
}) => (
  <div id="auth-box" style={{ display: `${show ? 'block' : 'none'}` }}>
    <div className="overlay" />
    <div className="box">
      <button
        className="close-btn"
        type="button"
        onClick={() => closeDrawer()}
      >
        <i className="fas fa-angle-right" />
      </button>

      <h1>Administrator Login</h1>
      <img className="user" src="/images/user.png" alt="user" />

      <div id="status-div" className={`${error ? 'error' : ''}`}>
        { error || 'Provide required details' }
      </div>

      <div className="field-group">
        <label>Email Address</label>
        <input
          type="text"
          placeholder="email@domain.com"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>

      <div className="field-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
      </div>

      <button
        className="login-btn"
        type="button"
        onClick={onSubmit}
        disabled={loginInProgress}
      >
        {
          !loginInProgress
            ? 'Login'
            : (
              <img
                src="/images/bolt.gif"
                alt="loading"
                style={{
                  height: '23px',
                  borderRadius: '50%',
                  marginTop: '-2px'
                }}
              />
            )
        }
      </button>
    </div>
  </div>
);

View.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  loginInProgress: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string
};

View.defaultProps = {
  error: null
};

export default View;
