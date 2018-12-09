import axios from 'axios';

import {
  setCategoriesLoading,
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../actions/categoryAction';

export const fetchCategories = () => (dispatch) => {
  dispatch(setCategoriesLoading(true));

  return axios.get('/api/categories')
    .then((response) => {
      const { categories } = response.data;

      dispatch(fetchCategoriesSuccess(categories));
      dispatch(setCategoriesLoading(false));
    })
    .catch(() => {
      dispatch(fetchCategoriesFailure());
    });
};

export default null;
