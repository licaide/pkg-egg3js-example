path = require('path');
/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1714011918934_8105';

  // add your middleware config here
  config.middleware = [];

  config.static = {
    prefix: '/public',
    dir: process.cwd() + '/public',
  };
  config.rundir = process.cwd() + '/run';
  config.logger = {
    dir: path.join(process.cwd(), 'logs', '/'),
    outputJSON: false,
  }


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
