import moxios from 'moxios';
import mockStore from '../__mocks__/store';

import { fetchCategories } from '../../thunks/categoryThunk';

import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING
} from '../../utilities/actionTypes';

describe('fetchCategories', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an array of expected actions for success request', (done) => {
    const store = mockStore();
    const categories = [];

    const expectedActions = [
      {
        type: FETCH_CATEGORIES_LOADING,
        status: true
      },
      {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
      },
      {
        type: FETCH_CATEGORIES_LOADING,
        status: false
      }
    ];

    moxios.stubRequest('/api/categories', {
      status: 200,
      response: {
        categories
      }
    });

    store.dispatch(fetchCategories())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should return an array of expected actions for error request', (done) => {
    const store = mockStore();

    const expectedActions = [
      {
        type: FETCH_CATEGORIES_LOADING,
        status: true
      },
      {
        type: FETCH_CATEGORIES_FAILURE
      }
    ];

    moxios.stubRequest('/api/categories', {
      status: 500,
      response: {
        error: {}
      }
    });

    store.dispatch(fetchCategories())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
