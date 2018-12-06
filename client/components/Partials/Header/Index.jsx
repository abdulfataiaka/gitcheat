import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawer, logout } from '../../../thunks/authThunks';
import View from './View';

/**
 *
 *
 * @description Header Component
 *
 * @returns { JSX }
 */
const Header = ({
  auth,
  toggleDrawer: toggleDrawerThunk,
  logout: logoutThunk
}) => (
  <View
    openDrawer={toggleDrawerThunk}
    logout={logoutThunk}
    auth={auth}
  />
);

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = {
  toggleDrawer,
  logout
};

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
