var Hapi = require("hapi");
var Boom = require("boom");

var options = {
  url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/cltjs',
  settings: {
    db: {
      native_parser: false
    }
  }
};

var plugin = {
  register: require('hapi-mongodb'),
  options: options,
};

module.exports = plugin;
/*
server.route( {
  "method"  : "GET",
  "path"    : "/users/{id}",
  "handler" : usersHandler
});

function usersHandler(request, reply) {
  var db = request.server.plugins['hapi-mongodb'].db;
  var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

  db.collection('users').findOne({  "_id" : new ObjectID(request.params.id) }, function(err, result) {
    if (err) return reply(Boom.internal('Internal MongoDB error', err));
    reply(result);
  });
};
*/
