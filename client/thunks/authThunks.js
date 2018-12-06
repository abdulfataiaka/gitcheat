import server from '../mockServer';
import { toggleDrawerAction, logoutAction, loginSuccessful } from '../actions/authAction';

export const toggleDrawer = () => dispatch => dispatch(toggleDrawerAction());

export const logout = () => dispatch => dispatch(logoutAction());

export const login = (email, password) => dispatch => (
  server.login(email, password)
    .then((user) => {
      dispatch(loginSuccessful(user.email));
    })
);
