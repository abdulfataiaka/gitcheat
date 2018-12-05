/* eslint-disable no-unused-vars */
import helps from './helps';
import categories from './categories';
import users from './users';

const errorobj = reason => new Error(reason);

const wait = (callback, fail) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fail) {
      reject(errorobj('Generic error'));
    }

    resolve(callback());
  }, 1000);
});

const waitV2 = callback => new Promise((resolve, reject) => {
  setTimeout(() => {
    callback(resolve, reject);
  }, 1000);
});

const fetchHelps = (categoryId, success = true) => wait(() => (
  helps.filter(help => `${help.categoryId}` === `${categoryId}`)
), !success);

const fetchCategories = (success = true) => wait(() => categories, !success);

const login = (email, password) => waitV2((resolve, reject) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) resolve(user);
  else reject(errorobj('Generic error'));
});

const search = query => waitV2((resolve, reject) => {
  if (query.length > 5) resolve(helps);
  else reject(errorobj('Search error'));
});

export default {
  fetchHelps,
  fetchCategories,
  login,
  search
};
