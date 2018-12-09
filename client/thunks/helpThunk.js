import axios from 'axios';

import {
  fetchCategoryHelpsSuccess,
  setCategoryHelpsLoading,
  fetchCategoryHelpsFailure
} from '../actions/helpAction';

export const fetchCategoryHelps = categoryId => (dispatch) => {
  dispatch(setCategoryHelpsLoading(true));

  return axios.get(`/api/helps/${categoryId}`)
    .then((response) => {
      const { helps } = response.data;
      dispatch(fetchCategoryHelpsSuccess(helps));
      dispatch(setCategoryHelpsLoading(false));
    })
    .catch(() => {
      dispatch(fetchCategoryHelpsFailure());
    });
};

export default null;
