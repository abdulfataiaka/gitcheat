import mockStore from '../__mocks__/store';
import { toggleDrawer, logout } from '../../thunks/authThunks';
import { SET_DRAWER_STATE, LOGOUT_SUCCESSFUL } from '../../utilities/actionTypes';

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
