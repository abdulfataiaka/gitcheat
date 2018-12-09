import moxios from 'moxios';
import mockStore from '../__mocks__/store';
import { toggleDrawer, logout, login } from '../../thunks/authThunks';
import {
  SET_DRAWER_STATE,
  LOGOUT_SUCCESSFUL,
  LOGIN_SUCCESSFUL
} from '../../utilities/actionTypes';

describe('toggleDrawer', () => {
  it('should return an array of expected actions', () => {
    const store = mockStore();
    const expectedActions = [{ type: SET_DRAWER_STATE }];

    store.dispatch(toggleDrawer());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('logout', () => {
  it('should return an array of expected actions', () => {
    const store = mockStore();
    const expectedActions = [{ type: LOGOUT_SUCCESSFUL }];

    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('login', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an array of expected actions for success request', (done) => {
    const store = mockStore();
    const email = 'test@gmail.com';

    const expectedActions = [
      {
        type: LOGIN_SUCCESSFUL,
        email
      }
    ];

    moxios.stubRequest('/api/auth/login', {
      status: 200,
      response: {
        email
      }
    });

    store.dispatch(login(email, ''))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
