import moxios from 'moxios';
import mockStore from '../__mocks__/store';
import { setSearchResult, search } from '../../thunks/searchThunks';
import {
  SEARCH_HELP_FETCH_SUCCESS,
  SEARCH_HELP_FETCH_FAILURE
} from '../../utilities/actionTypes';

describe('setSearchResult', () => {
  it('should return an array of expected actions', () => {
    const store = mockStore();
    const helps = [];

    const expectedActions = [{
      type: SEARCH_HELP_FETCH_SUCCESS,
      helps
    }];

    store.dispatch(setSearchResult(helps));
    expect(store.getActions()).toEqual(expectedActions);
  });
});


describe('search', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an array of expected actions for success request', (done) => {
    const store = mockStore();
    const helps = [];
    const query = 'hello';

    const expectedActions = [
      {
        type: SEARCH_HELP_FETCH_SUCCESS,
        helps
      }
    ];

    moxios.stubRequest('/api/search', {
      status: 200,
      response: {
        helps
      }
    });

    store.dispatch(search(query))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should return an array of expected actions for error request', (done) => {
    const store = mockStore();
    const query = 'hello';

    const expectedActions = [
      {
        type: SEARCH_HELP_FETCH_FAILURE
      }
    ];

    moxios.stubRequest('/api/search', {
      status: 500,
      response: {
        error: {}
      }
    });

    store.dispatch(search(query))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
