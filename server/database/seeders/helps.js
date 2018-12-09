/* eslint-disable no-console */
import Help from '../models/help';

const { NODE_ENV } = process.env;

const testSeeds = [
  {
    _id: 1,
    categoryId: 1,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git'
  }
];

const mainSeeds = [
  {
    _id: 1,
    categoryId: 1,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git'
  },
  {
    _id: 2,
    categoryId: 1,
    type: 'text',
    title: 'Installing git on windows using git installer',
    content: 'Downloading git installer from https://git-scm.com/download/win'
  },
  {
    _id: 3,
    categoryId: 1,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git'
  },
  {
    _id: 4,
    categoryId: 1,
    type: 'text',
    title: 'Installing git on windows using git installer',
    content: 'Downloading git installer from https://git-scm.com/download/win',
    video: null,
    examples: null
  },
  {
    _id: 5,
    categoryId: 1,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git',
    video: null,
    examples: null
  },
  {
    _id: 6,
    categoryId: 1,
    type: 'text',
    title: 'Installing git on windows using git installer',
    content: 'Downloading git installer from https://git-scm.com/download/win',
    video: null,
    examples: null
  },

  {
    _id: 7,
    categoryId: 2,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git',
    video: null,
    examples: null
  },
  {
    _id: 8,
    categoryId: 2,
    type: 'text',
    title: 'Installing git on windows using git installer',
    content: 'Downloading git installer from https://git-scm.com/download/win',
    video: null,
    examples: null
  },

  {
    _id: 9,
    categoryId: 3,
    type: 'cmd',
    title: 'Installing git on windows using choco',
    content: 'choco install git',
    video: null,
    examples: null
  },
  {
    _id: 10,
    categoryId: 3,
    type: 'text',
    title: 'Installing git on windows using git installer',
    content: 'Downloading git installer from https://git-scm.com/download/win',
    video: null,
    examples: null
  }
];

const helps = NODE_ENV === 'test' ? testSeeds : mainSeeds;

export default (done) => {
  Help.insertMany(helps, (error) => {
    if (error) {
      console.log('[!] Helps collection seed fail');
    } else {
      console.log('[*] Helps collection seeded successfully');
    }

    if (typeof done === 'function') done();
  });
};
