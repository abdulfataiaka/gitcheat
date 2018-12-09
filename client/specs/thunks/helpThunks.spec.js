import moxios from 'moxios';
import mockStore from '../__mocks__/store';

import { fetchCategoryHelps } from '../../thunks/helpThunk';

import {
  FETCH_CATEGORY_HELPS_SUCCESS,
  FETCH_CATEGORY_HELPS_FAILURE,
  FETCH_CATEGORY_HELPS_LOADING
} from '../../utilities/actionTypes';

describe('fetchCategoryHelps', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an array of expected actions for success request', (done) => {
    const store = mockStore();
    const helps = [];

    const expectedActions = [
      {
        type: FETCH_CATEGORY_HELPS_LOADING,
        status: true
      },
      {
        type: FETCH_CATEGORY_HELPS_SUCCESS,
        helps
      },
      {
        type: FETCH_CATEGORY_HELPS_LOADING,
        status: false
      }
    ];

    moxios.stubRequest('/api/helps/1', {
      status: 200,
      response: {
        helps
      }
    });

    store.dispatch(fetchCategoryHelps(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should return an array of expected actions for error request', (done) => {
    const store = mockStore();

    const expectedActions = [
      {
        type: FETCH_CATEGORY_HELPS_LOADING,
        status: true
      },
      {
        type: FETCH_CATEGORY_HELPS_FAILURE
      }
    ];

    moxios.stubRequest('/api/helps/1', {
      status: 500,
      response: {
        error: {}
      }
    });

    store.dispatch(fetchCategoryHelps(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
