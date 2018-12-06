import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = createStore(middlewares);

export default () => mockStore();
