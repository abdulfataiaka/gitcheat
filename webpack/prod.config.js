const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../build/client')
  },
});
