import axios from 'axios';
import {
  toggleDrawerAction,
  logoutAction,
  loginSuccessful
} from '../actions/authAction';

export const toggleDrawer = () => dispatch => dispatch(toggleDrawerAction());

export const logout = () => dispatch => dispatch(logoutAction());

export const login = (email, password) => dispatch => (
  axios.post('/api/auth/login', { email, password })
    .then((response) => {
      const { email: sEmail } = response.data;
      dispatch(loginSuccessful(sEmail));
    })
);
