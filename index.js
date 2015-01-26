'use strict';

var Hapi = require('hapi');
var path = require('path');
var readdir = require('fs').readdirSync;

try {
  require('./lib/extend')(process.env, require('./.config'));
}
catch (e) {}
var PORT = process.env.PORT || 8000;

var server = new Hapi.Server();
server.connection({port: PORT});

// load plugins

if (!module.parent) {
  server.register(
    readdir('plugins').map(function(p) { return require('./plugins/' + p); }),
    startServer
  );
}

// set view engine

server.views({
  engines: {
    jsx: require('hapi-react-views')
  },
  compileOptions: {
    renderMethod: 'renderToString',
    'node-jsx': {harmony: true},
  },
  path: 'views'
});

// load routes

require('./routes')(server);

function startServer() {
  server.start(function() {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
}

module.exports = server;
