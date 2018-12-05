import server from '../mockServer';

import {
  setCategoriesLoading,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../actions/helpAction';

import {
  CLOSE_CATEGORY_OVERLAY,
  SET_CATEGORY_OVERLAY_SHOW,
} from '../utilities/actionTypes';

export const setCategoryOverlayShow = show => dispatch => dispatch({
  type: SET_CATEGORY_OVERLAY_SHOW,
  show
});

export const closeCategoryOverlay = () => dispatch => dispatch({
  type: CLOSE_CATEGORY_OVERLAY
});

export const fetchCategories = () => (dispatch) => {
  dispatch(setCategoriesLoading(true));

  return server.fetchCategories(true)
    .then((categories) => {
      dispatch(fetchCategoriesSuccess(categories));
      dispatch(setCategoriesLoading(false));
    })
    .catch(() => {
      dispatch(fetchCategoriesFailure());
    });
};
