import { toggleDrawerAction, logoutAction, loginSuccessful } from '../../actions/authAction';
import { SET_DRAWER_STATE, LOGOUT_SUCCESSFUL, LOGIN_SUCCESSFUL } from '../../utilities/actionTypes';

describe('toggleDrawerAction', () => {
  it('should return object with property type', () => {
    const result = toggleDrawerAction();
    expect(result.type).toBe(SET_DRAWER_STATE);
  });
});

describe('logoutAction', () => {
  it('should return object with property type', () => {
    const result = logoutAction();
    expect(result.type).toBe(LOGOUT_SUCCESSFUL);
  });
});

describe('loginSuccessful', () => {
  it('should return object with property type with email', () => {
    const email = 'admin@gmail';
    const result = loginSuccessful(email);
    expect(result.type).toBe(LOGIN_SUCCESSFUL);
    expect(result.email).toBe(email);
  });
});
