import mockStore from '../__mocks__/store';
import { setSearchResult } from '../../thunks/searchThunks';
import { SEARCH_HELP_FETCH_SUCCESS } from '../../utilities/actionTypes';

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
