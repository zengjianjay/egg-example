'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533823850193_9770';

  // add your config here
  config.middleware = [];

  exports.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };
  return config;
};
