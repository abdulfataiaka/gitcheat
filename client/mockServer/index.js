/* eslint-disable no-unused-vars */
import helps from './helps';
import categories from './categories';

const errorobj = (status, reason) => new Error({ status, message: reason });

const wait = (callback, fail) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fail) {
      reject(errorobj(500, 'Error'));
    }

    resolve(callback());
  }, 1000);
});

const fetchHelps = (categoryId, success = true) => wait(() => (
  helps.filter(help => `${help.categoryId}` === `${categoryId}`)
), !success);

const fetchCategories = (success = true) => wait(() => categories, !success);

export default {
  fetchHelps,
  fetchCategories
};
