export const categories = [
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
];

export const helps = [
  {
    _id: 1,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on macOS with Homebrew',
    content: 'brew install git'
  },
  {
    _id: 2,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on Debian-based linux',
    content: 'sudo apt-get install git'
  },
  {
    _id: 3,
    categoryId: 1,
    type: 'cmd',
    title: 'Install git on Windows with Chocolatey',
    content: 'choco install git'
  },
];

export const categoriesFetch = {
  loading: false,
  error: false
};
