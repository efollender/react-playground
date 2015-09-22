import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {WriteStatsPlugin} from './plugins/stats';

export default {
  devtool: '#eval-source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '..', 'src', 'js', 'client.js'),
    ],
  },
  output: {
    publicPath: 'http://localhost:3001/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BROWSER: true,
        NODE_ENV: 'development',
      }),
    }),
    new WriteStatsPlugin({
      target: path.join(__dirname, '..', 'app', 'webpack-stats.json'),
      publicPath: 'http://localhost:3001/build/',
    }),
  ],
  babel: {
    stage: 0,
    optional: ['runtime'],
    loose: ['all'],
  },
};
