import {
  LOGIN_SUCCESSFUL, LOGOUT_SUCCESSFUL
} from '../utilities/actionTypes';

const initialState = {
  loggedIn: false,
  email: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL: return {
      loggedIn: true,
      email: action.email,
    };

    case LOGOUT_SUCCESSFUL: return {
      loggedIn: false,
      email: null,
    };

    default: return state;
  }
};
