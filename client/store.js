/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(reduxImmutableStateInvariant());
}

export default initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
