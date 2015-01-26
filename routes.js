'use strict';

var Joi = require('joi');
var path = require('path');
var extend = require('./lib/extend');
var readdir = require('fs').readdirSync;
var accepts = require('./lib/accepts');

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

  server.route({
    method: 'POST',
    path:'/2015-topics',
    config: {
      validate: {
        options: {abortEarly: false},
        payload: {
          'name': Joi.string().min(3).max(55).label('Full Name'),
          'topic': Joi.array().label('Topics'),
          'other': Joi.string().min(3).max(55).label('Other topic').optional().allow(''),
          // 'g-recaptcha-response': Joi.string().allow(''),
        }
      }
    },

    handler: function(request, reply) {
      console.log(request.payload);
      // TODO: persist payload

      var response = {message: 'Thank you for your picks, ' + request.payload.name + '!'};
      if (accepts(request, 'application/json')) {
        reply(response).code(200);
      }
      else {
        console.log('reply with view');
        reply.view('pages/home', response)
          .header('Content-Type', 'text/html;charset=UTF-8');
      }
    }
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
