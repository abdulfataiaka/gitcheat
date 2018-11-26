/* eslint-disable no-console */

export const subscribeToStore = (store) => {
  console.log(store.getState());

  store.subscribe(() => {
    console.log(store.getState());
  });
};

export default subscribeToStore;
