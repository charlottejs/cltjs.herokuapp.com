'use strict';

var Joi = require('joi');
var path = require('path');
var extend = require('./lib/extend');
var readdir = require('fs').readdirSync;

module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {file: '/public/favicon.ico'},
  });

  // static file server
  ['css', 'js', 'images'].forEach(function(a) {
    server.route({
      method: 'GET',
      path: '/public/' + a + '/{filename}', // param* for other syntax
      handler: {
        file: function (request) {
          return path.join('public', a, request.params.filename);
        }
        /* why is this syntax not working?
        directory: {
          path: __dirname + '/public'
        }
        */
      }
    });
  });

  readdir('views/pages').forEach(function(page) {
    var parts = page.split('.');
    var route = parts[0];
    var view = route;
    if (parts[1] !== 'jsx') return;
    if (route === 'home') route = '';

    server.route({
      method: 'GET',
      path:'/' + route,
      handler: function(request, reply) {
        // TODO: contextify each response: https://github.com/brianmcd/contextify
        reply.view('pages/' + view)
          .header('Content-Type', 'text/html;charset=UTF-8');
      }
    });
  });
};
