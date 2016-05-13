var path = require('path');
var webpack = require('webpack');
var React = require('react');

module.exports = {
  entry: './app.js',
  output: {
    path: 'dist/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
