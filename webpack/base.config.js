import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  target: 'web',
  entry: {
    bundle: path.join(__dirname, '..', 'src', 'js', 'client.js'),
  },
  output: {
    path: path.join(__dirname, '..', 'public', 'build'),
    publicPath: '/build/',
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'var',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        loaders: [
          ExtractTextPlugin.loader({
            extract: true,
            omit: 1
          }),
          'style',
          'css',
          'stylus']
      }
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BROWSER: true,
        NODE_ENV: process.env.NODE_ENV || 'development',
      }),
    }),
    new ExtractTextPlugin('/stylesheets/[hash].css'),
  ],
  babel: {
    stage: 0,
    optional: ['runtime'],
    loose: ['all'],
  },
  stylus: {
    use: [require('nib')(), require('rupture')()],
  },
};
