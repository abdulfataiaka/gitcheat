import {
  FETCH_CATEGORY_HELPS_SUCCESS,
  FETCH_CATEGORY_HELPS_FAILURE,
  FETCH_CATEGORY_HELPS_LOADING
} from '../../utilities/actionTypes';

import {
  fetchCategoryHelpsSuccess,
  fetchCategoryHelpsFailure,
  setCategoryHelpsLoading
} from '../../actions/helpAction';

describe('fetchCategoryHelpsSuccess', () => {
  it('should return object with property type and helps', () => {
    const result = fetchCategoryHelpsSuccess([]);
    expect(result.type).toEqual(FETCH_CATEGORY_HELPS_SUCCESS);
    expect(result.helps).toEqual([]);
  });
});

describe('fetchCategoryHelpsFailure', () => {
  it('should return object with property type', () => {
    const result = fetchCategoryHelpsFailure();
    expect(result.type).toEqual(FETCH_CATEGORY_HELPS_FAILURE);
  });
});

describe('setCategoryHelpsLoading', () => {
  it('should return object with property type and status', () => {
    const result = setCategoryHelpsLoading(true);
    expect(result.type).toEqual(FETCH_CATEGORY_HELPS_LOADING);
    expect(result.status).toEqual(true);
  });
});
