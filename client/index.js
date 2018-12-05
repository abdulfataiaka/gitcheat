import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { subscribeToStore } from './utilities/store';
import { fetchCategories } from './thunks/categoryThunk';

import App from './components/App';
import createStore from './store';

const store = createStore({});

store.dispatch(fetchCategories());

if (process.env.NODE_ENV === 'development') {
  subscribeToStore(store);
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('react-view')
);
