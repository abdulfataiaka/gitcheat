import { SEARCH_HELP_FETCH_SUCCESS, SEARCH_HELP_FETCH_FAILURE } from '../../utilities/actionTypes';
import { searchHelpFetchSuccess, searchHelpFetchFailure } from '../../actions/searchAction';

describe('searchHelpFetchSuccess', () => {
  it('should return object with property type with helps', () => {
    const result = searchHelpFetchSuccess([]);
    expect(result.type).toBe(SEARCH_HELP_FETCH_SUCCESS);
    expect(result.helps).toEqual([]);
  });
});

describe('searchHelpFetchFailure', () => {
  it('should return object with property type', () => {
    const result = searchHelpFetchFailure();
    expect(result.type).toBe(SEARCH_HELP_FETCH_FAILURE);
  });
});
