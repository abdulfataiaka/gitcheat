import {
  FETCH_CATEGORY_HELPS_SUCCESS,
  FETCH_CATEGORY_HELPS_LOADING,
  FETCH_CATEGORY_HELPS_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_LOADING,
  LOGIN_SUCCESSFUL
} from '../utilities/actionTypes';

// ++ helps action creators

export const fetchCategoryHelpsSuccess = helps => ({
  type: FETCH_CATEGORY_HELPS_SUCCESS,
  helps
});

export const fetchCategoryHelpsFailure = () => ({
  type: FETCH_CATEGORY_HELPS_FAILURE
});

export const setCategoryHelpsLoading = status => ({
  type: FETCH_CATEGORY_HELPS_LOADING,
  status
});

// ++ categroies action creators

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

// ++ auth action creators

export const loginSuccessful = email => ({
  type: LOGIN_SUCCESSFUL,
  email
});
