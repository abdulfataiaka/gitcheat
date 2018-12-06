import server from '../mockServer';

import {
  fetchCategoryHelpsSuccess,
  setCategoryHelpsLoading,
  fetchCategoryHelpsFailure
} from '../actions/helpAction';

import { SET_CURRENT_HELP_ID } from '../utilities/actionTypes';

export const setCurrentHelpId = helpId => dispatch => dispatch({
  type: SET_CURRENT_HELP_ID,
  helpId
});

export const fetchCategoryHelps = categoryId => (dispatch) => {
  dispatch(setCategoryHelpsLoading(true));

  server.fetchHelps(categoryId, true)
    .then((helps) => {
      dispatch(fetchCategoryHelpsSuccess(helps));
      dispatch(setCategoryHelpsLoading(false));
    })
    .catch(() => {
      dispatch(fetchCategoryHelpsFailure());
    });
};
