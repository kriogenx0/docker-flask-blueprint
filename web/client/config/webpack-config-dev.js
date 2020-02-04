const config = require('./webpack-config.js');

const devOverrides = {
  mode: 'development'
};

module.exports = Object.assign({}, config, devOverrides);
