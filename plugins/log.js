'use strict';

var Good = require('good');

var options = {
  reporters: [{
    reporter: require('good-console'),
    args:[{log: '*', response: '*'}]
  }],
};

var plugin = {
  register: Good,
  options: options,
};

module.exports = plugin;
