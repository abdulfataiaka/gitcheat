import { combineReducers } from 'redux';
import global from './global';
import categories from './categories';
import helps from './helps';
import auth from './auth';
import search from './search';

export default combineReducers({
  global,
  categories,
  helps,
  auth,
  search
});
