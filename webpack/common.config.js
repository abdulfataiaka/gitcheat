const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/,
          /bower_components/
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [
          /node_modules/,
          /bower_components/
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
