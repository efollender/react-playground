import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

export default {
  devtool: false,
  externals: /^[a-z\-\/0-9]+$/,
  target: 'node',
  entry: {
    bundle: path.join(__dirname, '..', 'src', 'js', 'routes.js'),
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'routes-compiled.js',
    libraryTarget: 'commonjs2',
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
        loader: 'css/locals!stylus',
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BROWSER: true,
        NODE_ENV: process.env.NODE_ENV || 'development',
      }),
    })
  ]
};
