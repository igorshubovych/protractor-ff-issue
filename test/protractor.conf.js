var argv = require('minimist')(process.argv);

var browsers = {
  chrome: {
    name: 'Chrome',
    browserName: 'chrome'
  },

  firefox: {
    name: 'Firefox',
    browserName: 'firefox'
  }
};

var browser = browsers['chrome'];

if (argv.browser == 'firefox') {
  browser = browsers['firefox'];
}


exports.config = {

  specs: [
    './e2e/**/*.spec.js'
  ],

  baseUrl: 'http://localhost:8080',

  capabilities: browser
};
