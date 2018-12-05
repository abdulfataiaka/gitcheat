import server from '../mockServer';

import {
  setCategoriesLoading,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../actions/helpAction';

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

export default null;
