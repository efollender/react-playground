import webpack from 'webpack';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from 'path';

export default {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BROWSER: true,
        NODE_ENV: 'production',
      }),
    }),
    new ExtractTextPlugin('/stylesheets/[hash].css'),
  ]
};
