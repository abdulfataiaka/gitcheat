const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  roots: [
    '<rootDir>/client/specs'
  ],
  setupFiles: [
    '<rootDir>/jest/enzyme.config.js'
  ],
  testMatch: [
    '**/*.spec.{js,jsx}'
  ],
  collectCoverage: true,
  coverageDirectory: 'client/coverage/',
  collectCoverageFrom: [
    'client/**/*.{js,jsx}',
    '!client/mockServer/**/*'
  ],
  coveragePathIgnorePatterns: [
    '/client/stylesheets/',
    '/client/specs/',
    '/client/index.js',
    '/client/store.js',
  ],
  moduleNameMapper: {
    '.scss$': 'identity-obj-proxy'
  }
};
