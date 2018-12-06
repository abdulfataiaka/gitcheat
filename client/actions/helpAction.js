import {
  FETCH_CATEGORY_HELPS_SUCCESS,
  FETCH_CATEGORY_HELPS_LOADING,
  FETCH_CATEGORY_HELPS_FAILURE,
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
