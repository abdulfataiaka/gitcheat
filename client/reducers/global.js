import {
  FETCH_CATEGORY_HELPS_LOADING,
  FETCH_CATEGORY_HELPS_FAILURE,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_FAILURE
} from '../utilities/actionTypes';

const initialState = {
  helpsFetch: {
    loading: false,
    error: false
  },

  categoriesFetch: {
    loading: false,
    error: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_HELPS_LOADING: return {
      ...state,
      helpsFetch: {
        loading: action.status,
        error: false
      }
    };

    case FETCH_CATEGORY_HELPS_FAILURE: return {
      ...state,
      helpsFetch: {
        loading: false,
        error: true
      }
    };

    case FETCH_CATEGORIES_LOADING: return {
      ...state,
      categoriesFetch: {
        loading: action.status,
        error: false
      }
    };

    case FETCH_CATEGORIES_FAILURE: return {
      ...state,
      categoriesFetch: {
        loading: false,
        error: true
      }
    };

    default: return state;
  }
};
