import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import View from './View';
import { toggleDrawer, login } from '../../thunks/authThunks';

/**
 *
 *
 * @description AuthBox Component
 *
 * @returns { JSX }
 */
class AuthBox extends Component {
  constructor(props) {
    super(props);
    this.state = { ...AuthBox.initState };
  }

  closeDrawer = () => {
    this.props.toggleDrawer();
    this.setState({ ...AuthBox.initState });
  }

  onChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value.trim(),
      error: null
    });
  }

  validate = () => {
    const { email, password } = this.state;

    if (email.split('@').length !== 2) {
      return 'Email provided is invalid';
    }

    if (password.length < 5) {
      return 'Password too short';
    }

    return true;
  }

  onSubmit = () => {
    const { email, password } = this.state;
    this.setState({
      error: null,
      loginInProgress: true
    });

    const status = this.validate();
    if (status !== true) {
      this.setState({
        error: status,
        loginInProgress: false
      }); return;
    }

    this.props.login(email, password)
      .then(() => {
        this.closeDrawer();
      })
      .catch((error) => {
        this.setState({
          loginInProgress: false,
          password: '',
          // ++ correct this later to use real api error message
          error: error.message || 'unknown error'
        });
      });
  }

  render() {
    const { drawerOpen } = this.props;
    const {
      loginInProgress,
      error,
      email,
      password
    } = this.state;

    return (
      <View
        closeDrawer={this.closeDrawer}
        show={drawerOpen}
        login={this.props.login}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        loginInProgress={loginInProgress}
        email={email}
        error={error}
        password={password}
      />
    );
  }
}

AuthBox.initState = {
  loginInProgress: false,
  error: null,

  email: '',
  password: ''
};

const mapStateToProps = ({ global: { drawerOpen } }) => ({
  drawerOpen
});

const mapDispatchToProps = {
  toggleDrawer,
  login
};

AuthBox.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBox);
