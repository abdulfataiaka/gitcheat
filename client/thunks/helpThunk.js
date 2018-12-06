import server from '../mockServer';

import {
  fetchCategoryHelpsSuccess,
  setCategoryHelpsLoading,
  fetchCategoryHelpsFailure
} from '../actions/helpAction';

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

export default null;
