const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src/client');

const config = {
  mode: "development",
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(jsx|js)?$/,
        use: [{
          loader: "babel-loader",
          options: {
          cacheDirectory: true,
          presets: ['react',  'env']
        }
      }]
      }
    ],
  }
};

module.exports = config;