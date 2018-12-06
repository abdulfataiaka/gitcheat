import server from '../mockServer';

import { toggleDrawerAction, logoutAction } from '../actions/authAction';
import { loginSuccessful } from '../actions/helpAction';

export const toggleDrawer = () => dispatch => dispatch(toggleDrawerAction());

export const logout = () => dispatch => dispatch(logoutAction());

export const login = (email, password) => dispatch => (
  server.login(email, password)
    .then((user) => {
      dispatch(loginSuccessful(user.email));
    })
);
