import server from '../mockServer';
import { searchHelpFetchSuccess, searchHelpFetchFailure } from '../actions/searchAction';

export const setSearchResult = helps => dispatch => dispatch(
  searchHelpFetchSuccess(helps)
);

export const search = query => dispatch => (
  server.search(query)
    .then((helps) => {
      dispatch(searchHelpFetchSuccess(helps));
    })
    .catch(() => {
      dispatch(searchHelpFetchFailure());
    })
);
