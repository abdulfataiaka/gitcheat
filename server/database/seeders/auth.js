/* eslint-disable no-console */
import Auth from '../models/auth';

const auths = [
  {
    email: 'test@gmail.com',
    password: 'password'
  },
  {
    email: 'abdulfataiaka@gmail.com',
    password: 'password'
  }
];

export default () => {
  Auth.insertMany(auths, (error) => {
    if (error) {
      console.log('[!] Authentication collection seed fail');
    } else {
      console.log('[*] Authentication collection seeded successfully');
    }
  });
};
