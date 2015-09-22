import baseConfig from './base.config';

const ENV = process.env.NODE_ENV || 'development';
const envConfig = require(`./${ENV}.config`);

const findValue = (path, object) => path.reduce((memo, key) => {
  if (!memo) {
    return false;
  }

  return memo[key] || false;
}, object);

const getConfig = (opt) => {
  const path = opt.split('.');
  let value;

  value = findValue(path, envConfig);
  if (!value) {
    value = findValue(path, baseConfig);
  }

  return value;
};

export default {
  devtool: getConfig('devtool'),
  externals: getConfig('externals'),
  target: getConfig('target'),
  entry: {
    bundle: getConfig('entry.bundle'),
  },
  output: {
    path: getConfig('output.path'),
    publicPath: getConfig('output.publicPath'),
    filename: getConfig('output.filename'),
    chunkFilename: getConfig('output.chunkFilename'),
    libraryTarget: getConfig('output.libraryTarget'),
  },
  module: {
    loaders: getConfig('module.loaders'),
  },
  plugins: getConfig('plugins'),
  stylus: getConfig('stylus'),
  babel: getConfig('babel'),
  file: getConfig('file'),
  url: getConfig('url'),
};
