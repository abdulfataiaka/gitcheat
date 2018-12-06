import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING
} from '../utilities/actionTypes';

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});

export const fetchCategoriesFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE
});

export const setCategoriesLoading = status => ({
  type: FETCH_CATEGORIES_LOADING,
  status
});
