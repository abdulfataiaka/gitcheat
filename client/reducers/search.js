import { SEARCH_HELP_FETCH_SUCCESS, SEARCH_HELP_FETCH_FAILURE } from '../utilities/actionTypes';

const initialState = {
  helps: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HELP_FETCH_SUCCESS: return {
      helps: [...action.helps],
      error: false
    };

    case SEARCH_HELP_FETCH_FAILURE: return {
      helps: [],
      error: true
    };

    default: return state;
  }
};
