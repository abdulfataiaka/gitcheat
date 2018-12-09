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
    name: 'Installation'
  },
  {
    _id: 2,
    name: 'Authorization'
  },
  {
    _id: 3,
    name: 'Configuration'
  },
  {
    _id: 4,
    name: 'Remote Repository'
  },
  {
    _id: 5,
    name: 'Branches'
  },
  {
    _id: 6,
    name: 'Create Repositories'
  },
  {
    _id: 7,
    name: 'Make Changes'
  },
  {
    _id: 8,
    name: 'Move Files'
  },
  {
    _id: 9,
    name: 'Removing Files'
  },
  {
    _id: 10,
    name: 'Stashing'
  },
  {
    _id: 11,
    name: 'History and Diff'
  },
  {
    _id: 12,
    name: 'Reseting'
  },
  {
    _id: 13,
    name: 'Tagging'
  },
  {
    _id: 14,
    name: 'Stashing'
  },
  {
    _id: 15,
    name: 'Make Changes'
  },
  {
    _id: 16,
    name: 'Remote Push'
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
