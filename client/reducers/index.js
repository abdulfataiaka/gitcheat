import { combineReducers } from 'redux';
import global from './global';
import categories from './categories';
import helps from './helps';
import auth from './auth';

export default combineReducers({
  global,
  categories,
  helps,
  auth
});
