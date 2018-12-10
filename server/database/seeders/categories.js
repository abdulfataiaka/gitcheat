/* eslint-disable no-console */
import Category from '../models/category';

const { NODE_ENV } = process.env;

const testSeeds = [
  {
    _id: 1,
    name: 'Installation'
  },
  {
    _id: 2,
    name: 'Authorization'
  },
];

const mainSeeds = [
  {
    _id: 1,
    name: 'Install GIT',
  },
  {
    _id: 2,
    name: 'Configuration',
  },
  {
    _id: 3,
    name: 'Create Repositories',
  },
  {
    _id: 4,
    name: 'Make Changes',
  },
  {
    _id: 5,
    name: 'Branches',
  },
  {
    _id: 6,
    name: 'Moving and removing files',
  },
  {
    _id: 7,
    name: 'Stashing',
  },
  {
    _id: 8,
    name: 'History and diff',
  },
  {
    _id: 9,
    name: 'Cancel and redo stuffs',
  },
  {
    _id: 10,
    name: 'Sync and remote repos',
  },
  {
    _id: 11,
    name: 'Cancel and redo stuffs',
  },
  {
    _id: 12,
    name: 'Tagging',
  }
];

const categories = NODE_ENV === 'test' ? testSeeds : mainSeeds;

export default (done) => {
  Category.insertMany(categories, (error) => {
    if (error) {
      console.log('[!] Categories collection seed fail');
    } else {
      console.log('[*] Categories collection seeded successfully');
    }

    if (typeof done === 'function') done();
  });
};
