import { FETCH_CATEGORY_HELPS_SUCCESS } from '../utilities/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORY_HELPS_SUCCESS: return [...action.helps];
    default: return state;
  }
};
