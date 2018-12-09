import axios from 'axios';
import { searchHelpFetchSuccess, searchHelpFetchFailure } from '../actions/searchAction';

export const setSearchResult = helps => dispatch => dispatch(
  searchHelpFetchSuccess(helps)
);

export const search = query => dispatch => (
  axios.post('/api/search', { query })
    .then((response) => {
      const { helps } = response.data;
      dispatch(searchHelpFetchSuccess(helps));
    })
    .catch(() => {
      dispatch(searchHelpFetchFailure());
    })
);
