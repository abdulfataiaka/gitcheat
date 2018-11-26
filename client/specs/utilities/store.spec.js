import { subscribeToStore } from '../../utilities/store';

describe('Testing subscribeToStore', () => {
  it('should return undefined', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    const store = { subscribe: cb => cb(), getState: jest.fn() };
    expect(subscribeToStore(store)).toBe(undefined);
  });
});
