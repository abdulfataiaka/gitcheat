import { SEARCH_HELP_FETCH_SUCCESS, SEARCH_HELP_FETCH_FAILURE } from '../utilities/actionTypes';

export const searchHelpFetchSuccess = helps => ({
  type: SEARCH_HELP_FETCH_SUCCESS,
  helps
});

export const searchHelpFetchFailure = () => ({
  type: SEARCH_HELP_FETCH_FAILURE,
});

export default null;
