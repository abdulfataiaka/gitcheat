/* eslint-disable no-console */
import Auth from '../models/auth';

const { NODE_ENV } = process.env;

const testSeeds = [
  {
    email: 'test@gmail.com',
    password: 'password'
  },
];

const mainSeeds = [
  {
    email: 'test@gmail.com',
    password: 'password'
  },
  {
    email: 'abdulfataiaka@gmail.com',
    password: 'password'
  }
];

const auths = NODE_ENV === 'test' ? testSeeds : mainSeeds;

export default (done) => {
  Auth.insertMany(auths, (error) => {
    if (error) {
      console.log('[!] Authentication collection seed fail');
    } else {
      console.log('[*] Authentication collection seeded successfully');
    }

    if (typeof done === 'function') done();
  });
};
