import { SET_DRAWER_STATE, LOGOUT_SUCCESSFUL } from '../utilities/actionTypes';

export const toggleDrawerAction = () => ({
  type: SET_DRAWER_STATE
});

export const logoutAction = () => ({
  type: LOGOUT_SUCCESSFUL
});

export default null;
