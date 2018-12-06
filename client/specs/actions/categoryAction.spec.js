import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING
} from '../../utilities/actionTypes';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  setCategoriesLoading
} from '../../actions/categoryAction';

describe('fetchCategoriesSuccess', () => {
  it('should return object with property type and categories', () => {
    const result = fetchCategoriesSuccess([]);
    expect(result.type).toEqual(FETCH_CATEGORIES_SUCCESS);
    expect(result.categories).toEqual([]);
  });
});

describe('fetchCategoriesFailure', () => {
  it('should return object with property type', () => {
    const result = fetchCategoriesFailure();
    expect(result.type).toEqual(FETCH_CATEGORIES_FAILURE);
  });
});

describe('setCategoriesLoading', () => {
  it('should return object with property type and status', () => {
    const result = setCategoriesLoading(true);
    expect(result.type).toEqual(FETCH_CATEGORIES_LOADING);
    expect(result.status).toEqual(true);
  });
});
