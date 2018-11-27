const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/build/client'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, '../public'),
      path.join(__dirname, '../'),
    ],
    proxy: {
      '/api': 'http://localhost:9000'
    }
  }
});
